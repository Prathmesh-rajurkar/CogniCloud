import React from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ThemeToggler from "./ThemeToggler";
const Navbar = () => {
    return (
        <div className="max-w-4xl mx-auto py-2 px-4 flex justify-between items-center rounded-xl border shadow-md border-gray-200 dark:border-gray-700 backdrop-blur-xl bg-white/10 dark:bg-black/10">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold text-white px-[0.9rem] py-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    C
                </h1>
                <h2 className="text-xl font-semibold">Cognicloud</h2>
            </div>

            <div className="flex items-center gap-4">
                <SignedOut>
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center box-border p-[1.5px_1.5px_1.7px_1.8px] rounded-[8.9px] bg-gradient-to-r from-blue-600 to-purple-600 ">
                            <a href="/sign-in">
                            <Button className="dark:bg-gray-900 cursor-pointer bg-gray-100 text-black dark:text-white transition-colors duration-300">
                                Sign In
                            </Button></a>
                        </div>
<a href="/sign-up">
                        <Button className="text-white py-[20px] cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 ">
                            Get Started
                        </Button></a>
                    </div>
                </SignedOut>
                <SignedIn>
                    <Button className="text-white py-[20px] cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 ">
                        Dashboard
                    </Button>
                </SignedIn>
                <div>
                    <ThemeToggler />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
