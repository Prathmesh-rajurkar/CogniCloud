import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import ImageKit from "imagekit";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
});

export async function POST(request: NextRequest) {
    try {
        // Check if the request is authenticated
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const formData = await request.formData();
        const file = formData.get("file") as File;
        const formParentId = formData.get("parentId") as string;
        const formUserId = formData.get("userId") as string;

        if (!file || !formUserId || formUserId !== userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        if (formParentId) {
            const [parentFolder] = await db
                .select()
                .from(files)
                .where(
                    and(
                        eq(files.id, formParentId),
                        eq(files.userId, userId),
                        eq(files.isFolder, true)
                    )
                );
        } else {
            return NextResponse.json(
                { error: "Parent folder not found" },
                { status: 404 }
            );
        }
        if (
            !file.type.startsWith("image/") &&
            file.type !== "application/pdf"
        ) {
            return NextResponse.json(
                { error: "Only Images and PDF are supported" },
                { status: 400 }
            );
        }

        const buffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(buffer);
        const originalFileName = file.name;
        const folderPath = formParentId
            ? `/droply/${userId}/folder/${formParentId}`
            : `/droply/${userId}`;
        const fileExtension = originalFileName.split(".").pop() || "";
        if (!fileExtension) {
            return NextResponse.json(
                { error: "File extension not found" },
                { status: 400 }
            );
        }
        const uniqueFileName = `${uuidv4()}.${fileExtension}`;
        const uploadResponse = await imagekit.upload({
            file: fileBuffer,
            fileName: uniqueFileName,
            folder: folderPath,
            useUniqueFileName: false,
        });

        const fileData = {
            name: originalFileName,
            path: uploadResponse.filePath,
            size: file.size,
            type: file.type,
            fileUrl: uploadResponse.url,
            thumbnailUrl: uploadResponse.thumbnailUrl || null,
            userId: userId,
            parentId: formParentId,
            isFolder: false,
            isStarred: false,
            isTrash: false,
        };

        const [newData] = await db.insert(files).values(fileData).returning();

        return NextResponse.json(newData);
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json(
            { error: "Failed to upload file" },
            { status: 500 }
        );
    }
}
