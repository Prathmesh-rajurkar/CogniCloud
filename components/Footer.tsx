'use client';

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
     const [showSignIn, setShowSignIn] = useState(false);
    return (
        <div>
            {/* Final CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to transform
                        <br />
                        how you store files?
                    </h2>
                    <p className="text-xl mb-12 text-blue-100">
                        Join millions of users who've already made the switch to
                        the future of file storage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => setShowSignIn(true)}
                            className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100 text-base"
                        >
                            Start your free trial
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setShowSignIn(true)}
                            className="h-14 px-8 border-white/30 text-white hover:bg-white/10 text-base"
                        >
                            Talk to sales
                        </Button>
                    </div>
                </div>
            </section>
            <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black/95 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        D
                                    </span>
                                </div>
                                <span className="font-semibold">Dropbox</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                The future of file storage, available today.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Features
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Pricing
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Enterprise
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        API
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        About
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Blog
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Careers
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Help Center
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Privacy
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Terms
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-gray-400 hover:text-white"
                                    >
                                        Status
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                        <p>© 2024 Dropbox. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
