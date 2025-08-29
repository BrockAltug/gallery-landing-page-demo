"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ContactModal } from "@/components/contact-modal"
import { NewsletterModal } from "@/components/newsletter-modal"
import { ProductShowcaseModal } from "@/components/product-showcase-modal"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showContactModal, setShowContactModal] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)

  const sampleProduct = {
    id: "2",
    name: "Artisan Wooden Bowl Set",
    price: 145,
    originalPrice: 180,
    description:
      "A stunning set of three handcrafted wooden bowls, each carved from sustainably sourced walnut wood. Perfect for serving or as decorative pieces.",
    images: [
      "/placeholder.svg?key=bowl1",
      "/placeholder.svg?key=bowl2",
      "/placeholder.svg?key=bowl3",
      "/placeholder.svg?key=bowl4",
    ],
    category: "Woodwork",
    materials: ["Walnut Wood", "Natural Oil Finish"],
    dimensions: 'Large: 12" x 4", Medium: 10" x 3", Small: 8" x 2"',
    artisan: {
      name: "James Chen",
      location: "Portland, OR",
      avatar: "/placeholder.svg?key=james",
    },
    rating: 4.9,
    reviews: 18,
    inStock: true,
    features: [
      "Hand-carved from single piece of wood",
      "Food-safe natural oil finish",
      "Unique wood grain patterns",
      "Set of three nested bowls",
      "Sustainably sourced materials",
    ],
  }

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <footer className="py-20 px-6 gradient-mesh relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div
            className="absolute top-16 left-16 w-40 h-40 bg-eucalyptus/15 rounded-full blur-3xl animate-float-slow"
            style={{
              transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-24 right-12 w-48 h-48 bg-terracotta/12 rounded-full blur-3xl animate-float-delayed"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-32 h-32 bg-clay/20 rounded-full blur-2xl animate-pulse-soft"
            style={{
              transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-32 right-24 w-24 h-24 text-eucalyptus/15 animate-rotate-slow"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 10 C70 30, 90 50, 70 70 C50 90, 30 70, 10 50 C30 30, 50 10, 50 10 Z" />
            <circle cx="50" cy="50" r="15" fill="white" opacity="0.6" />
          </svg>
          <svg
            className="absolute bottom-40 left-20 w-16 h-16 text-terracotta/20 animate-float"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <polygon points="50,15 85,85 15,85" />
            <circle cx="50" cy="60" r="10" fill="white" opacity="0.5" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className={`space-y-6 transition-all duration-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-5">
              <div className="flex items-center justify-center gap-4">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-eucalyptus to-transparent"></div>
                <p className="font-script text-2xl md:text-3xl text-eucalyptus animate-shimmer bg-gradient-to-r from-eucalyptus via-sage to-eucalyptus bg-[length:200%_100%] bg-clip-text text-transparent">
                  Ready to Begin?
                </p>
                <div className="w-24 h-px bg-gradient-to-r from-eucalyptus via-transparent to-transparent"></div>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none text-balance text-shadow-soft">
                Your Journey
                <span className="block font-script text-gradient text-5xl md:text-6xl lg:text-7xl mt-2">Awaits</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-warm-gray max-w-4xl mx-auto leading-relaxed text-balance opacity-90">
              Ready to discover pieces that will become treasured parts of your story? Let's create something beautiful
              together, one handcrafted piece at a time. Your home deserves the soul that only artisan work can provide.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1200 delay-300 ${isVisible ? "animate-fade-in-up-delayed" : "opacity-0"}`}
          >
            <Button
              size="lg"
              onClick={() => setShowProductModal(true)}
              className="gradient-eucalyptus hover:shadow-artisan-xl text-white px-16 py-8 text-xl font-semibold rounded-3xl shadow-artisan-lg transition-all duration-500 hover-lift hover-glow group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                Shop Collection
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowContactModal(true)}
              className="border-3 border-eucalyptus text-eucalyptus hover:bg-eucalyptus hover:text-white px-16 py-8 text-xl font-semibold rounded-3xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:shadow-artisan-xl hover-lift relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-eucalyptus scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>

          <div
            className={`space-y-8 pt-8 transition-all duration-1200 delay-500 ${isVisible ? "animate-fade-in-up-delayed" : "opacity-0"}`}
          >
            <div className="max-w-lg mx-auto">
              <div className="space-y-4 text-center">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Stay Connected</h3>
                <p className="text-muted-foreground text-lg">
                  Be the first to discover new collections and artisan stories
                </p>
              </div>
              <div className="mt-6">
                <Button
                  onClick={() => setShowNewsletterModal(true)}
                  size="lg"
                  className="w-full gradient-terracotta text-white px-8 py-4 rounded-2xl hover:shadow-artisan-lg transition-all duration-300 hover-lift text-lg font-semibold group relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                    Join Our Community
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-eucalyptus" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>No spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-eucalyptus" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>15% welcome discount</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full gradient-eucalyptus flex items-center justify-center shadow-artisan">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">© 2024 Artisan Studio</p>
                    <p className="text-xs">Crafted with love since 1987</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="hover:text-eucalyptus transition-colors duration-300 hover-lift font-medium"
                  >
                    Privacy
                  </button>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="hover:text-eucalyptus transition-colors duration-300 hover-lift font-medium"
                  >
                    Terms
                  </button>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="hover:text-eucalyptus transition-colors duration-300 hover-lift font-medium"
                  >
                    Contact
                  </button>
                  <a href="#" className="hover:text-eucalyptus transition-colors duration-300 hover-lift font-medium">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

      <NewsletterModal isOpen={showNewsletterModal} onClose={() => setShowNewsletterModal(false)} />

      <ProductShowcaseModal
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
        product={sampleProduct}
      />
    </>
  )
}
