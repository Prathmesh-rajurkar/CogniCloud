"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { SignIn } from "@/components/SignInUI";
// import { SignIn as SignInUI } from "@/components/SignIn"; // your styled component

export default function SignInPage() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    const handleSignIn = async (email: string, password: string) => {
        if (!isLoaded) return;
        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/"); // or your dashboard
            } else {
                console.warn("Unexpected status:", result.status);
            }
        } catch (err: any) {
            console.error("Sign in error:", err);
            alert(err.errors?.[0]?.message || "Sign in failed");
        }
    };

    const handleGoogleSignIn = async () => {
        if (!isLoaded) return;
        try {
            await signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sign-in/sso-callback",
                redirectUrlComplete: "/",
            });
        } catch (err: any) {
            console.error("Google sign in error:", err);
            alert("Google sign in failed");
        }
    };

    if (!isLoaded) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"
                    // style={{
                    //     transform: `translate(-50%, -50%) translateY(${
                    //         scrollY * 0.1
                    //     }px)`,
                    // }}
                ></div>
            </div>
            <SignIn
                onSignIn={handleSignIn}
                onGoogleSignIn={handleGoogleSignIn} // 🔥 add this prop for Google
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />
        </div>
    );
}
