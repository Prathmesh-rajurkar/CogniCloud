'use client';

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

const PricingSection = () => {
     const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div>
        <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
              Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple,
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                transparent pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-5xl font-bold mb-4">$0</div>
                <p className="text-gray-600 dark:text-gray-300">Perfect for personal use</p>
              </div>
              <ul className="space-y-4 mb-8">
                {["5 GB storage", "3 devices", "Basic sharing", "30-day recovery"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full h-12 cursor-pointer"
                variant="outline"
                onClick={() => setShowSignIn(true)}
              >
                Get Started
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/20 text-white">Most Popular</Badge>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-5xl font-bold mb-4">$12</div>
                <p className="text-blue-100">Everything you need to scale</p>
              </div>
              <ul className="space-y-4 mb-8">
                {["Unlimited storage", "Unlimited devices", "Advanced sharing", "AI organization"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full h-12 bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowSignIn(true)}
              >
                Start Free Trial
              </Button>
            </Card>
          </div>
        </div>
      </section>


    </div>
  )
}

export default PricingSection