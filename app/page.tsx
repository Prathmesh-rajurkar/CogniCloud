import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ThemeToggler from "@/components/ThemeToggler";
import React from "react";

export default function Home() {
    return (
        <div className="p-0 m-0">
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
            <div className="bg-transparent h-screen max-w-screen transition-colors duration-300">
                <ThemeToggler />
                <div className="fixed w-full p-4 z-100">
                    <Navbar />
                </div>
                <div className="max-w-6xl mx-auto ">
                    <HeroSection />
                </div>
                <div className="max-w-6xl mx-auto ">
                    <FeatureSection />
                </div>
                <div className="max-w-6xl mx-auto ">
                    <PricingSection />
                </div>
                <div>
                    <Footer/>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}
