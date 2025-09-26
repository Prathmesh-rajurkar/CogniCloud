"use client";

import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
    const [showSignIn, setShowSignIn] = useState(false);
    const stats = [
        { number: "500M+", label: "Active Users" },
        { number: "99.99%", label: "Uptime" },
        { number: "256-bit", label: "Encryption" },
        { number: "180+", label: "Countries" },
    ];
    return (
        <div className="pt-20">
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-6xl mx-auto">
                    {/* Announcement Badge */}
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">
                            Introducing AI-powered file organization
                        </span>
                        <ArrowRight className="w-3 h-3 text-blue-500" />
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-[1.1]">
                        The future of
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            file storage
                        </span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Experience the next generation of cloud storage with
                        AI-powered organization, lightning-fast sync, and
                        collaboration tools that actually work.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button
                            size="lg"
                            onClick={() => setShowSignIn(true)}
                            className="h-14 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base group"
                        >
                            Start for free
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setShowSignIn(true)}
                            className="h-14 px-8 bg-white/10 dark:bg-black/10 backdrop-blur-sm border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 text-base"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Watch demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
