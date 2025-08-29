"use client"

import type React from "react"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Sparkles, CheckCircle } from "lucide-react"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}


export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubscribed(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
      onClose()
    }, 3000)
  }

  if (isSubscribed) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md" title="">
        <div className="p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-eucalyptus/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-eucalyptus" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-foreground">Welcome to Our Community!</h2>
            <p className="text-muted-foreground">
              You're now subscribed to our newsletter. Check your email for a special welcome gift!
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Gift className="h-5 w-5 text-terracotta" />
            <Badge className="bg-terracotta/10 text-terracotta">15% Off Your First Order</Badge>
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" title="">
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <defs>
              <pattern id="newsletter-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#newsletter-pattern)" />
          </svg>
        </div>

        <div className="relative p-8 text-center space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-eucalyptus rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-white" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold text-foreground">Join Our Artisan Community</h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Get exclusive access to new collections, behind-the-scenes stories, and special offers crafted just for
                you.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-eucalyptus/5">
              <div className="w-10 h-10 bg-eucalyptus/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-eucalyptus" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-foreground">Early Access</p>
                <p className="text-xs text-muted-foreground">New collections first</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-terracotta/5">
              <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
                <Gift className="h-5 w-5 text-terracotta" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-foreground">Exclusive Offers</p>
                <p className="text-xs text-muted-foreground">Member-only discounts</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-sage/5">
              <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-sage" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-foreground">Artisan Stories</p>
                <p className="text-xs text-muted-foreground">Behind the craft</p>
              </div>
            </div>
          </div>

          {/* Welcome Offer */}
          <div className="p-4 bg-gradient-to-r from-eucalyptus/10 to-terracotta/10 rounded-2xl border border-eucalyptus/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Gift className="h-5 w-5 text-terracotta" />
              <Badge className="bg-terracotta text-white">Welcome Gift</Badge>
            </div>
            <p className="text-sm font-semibold text-foreground">Get 15% off your first order</p>
            <p className="text-xs text-muted-foreground">Plus free shipping on orders over $75</p>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-border focus:border-eucalyptus focus:ring-eucalyptus/20 text-center"
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !email}
              className="w-full gradient-eucalyptus text-white rounded-2xl hover:shadow-artisan-xl transition-all duration-300 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Subscribing...</span>
                </div>
              ) : (
                "Join Our Community"
              )}
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time. No spam, just beautiful craftsmanship.
          </p>
        </div>
      </div>
    </Modal>
  )
}
