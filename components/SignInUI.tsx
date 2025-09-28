"use client";

import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    Chrome,
    Moon,
    Sun,
    Apple,
} from "lucide-react";
import ThemeToggler from "./ThemeToggler";

interface SignInProps {
    onSignIn: (email: string, password: string) => void;
    onGoogleSignIn: () => void;
    onAppleSignIn?: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export function SignIn({
    onSignIn,
    onGoogleSignIn,
    onAppleSignIn,
    isDarkMode,
    toggleDarkMode,
}: SignInProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;

        setIsLoading(true);
        try {
            await onSignIn(email, password);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-6 relative">
            {/* Dark Mode Toggle */}
            <div className="absolute right-4 top-4">
                <ThemeToggler />
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="text-center flex items-center flex-col gap-8 mb-6 sm:mb-8">
                    <h1 className="text-4xl   font-semibold text-white h-[70px] w-[70px] flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                        C
                    </h1>
                    <h2 className="text-2xl font-semibold">Welcome to Cognicloud</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Your files, anywhere you go
                    </p>
                </div>

                <Card className="shadow-large border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                    <CardHeader className="space-y-1 text-center pb-4 sm:pb-6">
                        <CardTitle className="text-xl sm:text-2xl font-semibold">
                            {isSignUp ? "Create your account" : "Sign in"}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                            {isSignUp
                                ? "Join millions who trust Dropbox"
                                : "Access your Dropbox account"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Social Login */}
                        <div className="grid grid-cols-1 gap-3">
                            <Button
                                variant="outline"
                                onClick={onGoogleSignIn}
                                disabled={isLoading}
                                className="h-11 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                            >
                                <Chrome className="w-5 h-5 mr-3" />
                                Continue with Google
                            </Button>

                            {onAppleSignIn && (
                                <Button
                                    variant="outline"
                                    onClick={onAppleSignIn}
                                    disabled={isLoading}
                                    className="h-11 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                                >
                                    <Apple className="w-5 h-5 mr-3" />
                                    Continue with Apple
                                </Button>
                            )}
                        </div>

                        {/* Separator */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white dark:bg-gray-900 px-4 text-gray-500 dark:text-gray-400">
                                    or
                                </span>
                            </div>
                        </div>

                        {/* Email/Password */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="pl-10 h-11 bg-white/70 dark:bg-gray-800/70"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="pl-10 pr-10 h-11 bg-white/70 dark:bg-gray-800/70"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-transparent"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400" />
                                        )}
                                        <span className="sr-only">
                                            {showPassword
                                                ? "Hide password"
                                                : "Show password"}
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            {!isSignUp && (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                        <Label
                                            htmlFor="remember"
                                            className="text-sm text-gray-600 dark:text-gray-300"
                                        >
                                            Remember me
                                        </Label>
                                    </div>
                                    <Button
                                        variant="link"
                                        className="px-0 h-auto text-sm text-primary hover:text-primary/80"
                                    >
                                        Forgot password?
                                    </Button>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-medium"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>
                                            {isSignUp
                                                ? "Creating account..."
                                                : "Signing in..."}
                                        </span>
                                    </div>
                                ) : isSignUp ? (
                                    "Create account"
                                ) : (
                                    "Sign in"
                                )}
                            </Button>
                        </form>

                        {/* Toggle Sign Up/Sign In */}
                        <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {isSignUp
                                    ? "Already have an account?"
                                    : "Don't have an account?"}{" "}
                                <Button
                                    variant="link"
                                    className="px-0 h-auto text-sm font-medium text-primary hover:text-primary/80"
                                    onClick={() => setIsSignUp(!isSignUp)}
                                >
                                    {isSignUp ? "Sign in" : "Sign up for free"}
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8 space-y-4">
                    <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <Button
                            variant="link"
                            className="px-0 h-auto text-sm hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            Terms of Service
                        </Button>
                        <Button
                            variant="link"
                            className="px-0 h-auto text-sm hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            Privacy Policy
                        </Button>
                        <Button
                            variant="link"
                            className="px-0 h-auto text-sm hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            Help Center
                        </Button>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        © 2024 Dropbox. Your files, simplified.
                    </p>
                </div>
            </div>
        </div>
    );
}
