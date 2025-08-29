"use client"

import type React from "react"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })
      onClose()
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md" title="">
        <div className="p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-eucalyptus/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-eucalyptus" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-foreground">Message Sent!</h2>
            <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </div>
          <div className="w-full bg-eucalyptus/20 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-eucalyptus rounded-full animate-pulse" style={{ width: "100%" }} />
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title="Get in Touch">
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              We'd love to hear from you. Whether you have questions about our artisan pieces, custom orders, or just
              want to say hello, we're here to help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sand/20 transition-colors duration-200">
              <div className="w-10 h-10 bg-eucalyptus/10 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-eucalyptus" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sand/20 transition-colors duration-200">
              <div className="w-10 h-10 bg-eucalyptus/10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-eucalyptus" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">hello@artisancraft.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sand/20 transition-colors duration-200">
              <div className="w-10 h-10 bg-eucalyptus/10 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-eucalyptus" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Studio</p>
                <p className="text-sm text-muted-foreground">123 Artisan Lane, Craft City, CA 90210</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sand/20 transition-colors duration-200">
              <div className="w-10 h-10 bg-eucalyptus/10 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-eucalyptus" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM PST</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-eucalyptus/5 rounded-2xl border border-eucalyptus/20">
            <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
            <p className="text-sm text-muted-foreground">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="rounded-xl border-border focus:border-eucalyptus focus:ring-eucalyptus/20"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="rounded-xl border-border focus:border-eucalyptus focus:ring-eucalyptus/20"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded-xl border-border focus:border-eucalyptus focus:ring-eucalyptus/20"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiryType">Inquiry Type</Label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-xl border border-border focus:border-eucalyptus focus:ring-2 focus:ring-eucalyptus/20 bg-background"
              >
                <option value="general">General Inquiry</option>
                <option value="custom">Custom Order</option>
                <option value="wholesale">Wholesale</option>
                <option value="press">Press & Media</option>
                <option value="support">Customer Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="rounded-xl border-border focus:border-eucalyptus focus:ring-eucalyptus/20"
                placeholder="What can we help you with?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="rounded-xl border-border focus:border-eucalyptus focus:ring-eucalyptus/20 resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full gradient-eucalyptus text-white rounded-2xl hover:shadow-artisan-xl transition-all duration-300 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </div>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </Modal>
  )
}
