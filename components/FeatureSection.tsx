'use client';
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Database, Globe, Shield, Sparkles, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";

const FeatureSection = () => {
    const [currentFeature, setCurrentFeature] = useState(0);
    const features = [
    {
      icon: Database,
      title: "Unlimited Storage",
      description: "Store as much as you need with our scalable cloud infrastructure.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Zap,
      title: "Lightning Sync",
      description: "Real-time synchronization across all your devices and platforms.",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "End-to-end encryption with zero-knowledge architecture.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Access your files at lightning speed from anywhere in the world.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share, collaborate, and work together seamlessly in real-time.",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Smart organization and instant search powered by machine learning.",
      color: "from-rose-500 to-pink-400"
    }
  ];
    return (
        <div>
            <section className="py-32 z-50 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <Badge
                            variant="secondary"
                            className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                        >
                            Features
                        </Badge>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Built for the
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                modern world
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Every feature designed with performance, security,
                            and user experience in mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className={`relative p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-500 group cursor-pointer
                  ${
                      currentFeature === index
                          ? "ring-2 ring-blue-500/50 scale-105"
                          : ""
                  }`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                                ></div>
                                <div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;
