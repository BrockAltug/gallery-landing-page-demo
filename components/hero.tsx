"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ProductShowcaseModal } from "@/components/product-showcase-modal"
import { ContactModal } from "@/components/contact-modal"
import { NewsletterModal } from "@/components/newsletter-modal"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showProductModal, setShowProductModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)

  const sampleProduct = {
    id: "1",
    name: "Handcrafted Ceramic Vase",
    price: 89,
    originalPrice: 120,
    description:
      "A beautiful handcrafted ceramic vase made with love and traditional techniques. Each piece is unique and tells its own story.",
    images: [
      "/handcrafted-ceramic-vase.png",
      "/ceramic-vase-side.png",
      "/ceramic-vase-detail.png",
      "/ceramic-vase-in-use.png",
    ],
    category: "Ceramics",
    materials: ["Clay", "Natural Glaze"],
    dimensions: '8" H x 4" W',
    artisan: {
      name: "Maria Rodriguez",
      location: "Santa Fe, NM",
      avatar: "/artisan-portrait.png",
    },
    rating: 4.8,
    reviews: 24,
    inStock: true,
    features: [
      "Hand-thrown on pottery wheel",
      "Food-safe natural glaze",
      "Microwave and dishwasher safe",
      "Unique organic shape",
      "Signed by the artisan",
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
      <section className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden gradient-mesh">
        <div className="absolute inset-0 opacity-30 will-change-transform">
          <div
            className="absolute top-20 left-10 w-40 h-40 bg-eucalyptus rounded-full blur-3xl animate-float-slow"
            style={{
              transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
            }}
          ></div>
          <div
            className="absolute bottom-32 right-16 w-56 h-56 bg-terracotta rounded-full blur-3xl animate-float-delayed"
            style={{
              transform: `translate3d(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px, 0)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-32 h-32 bg-sage rounded-full blur-2xl animate-float"
            style={{
              transform: `translate3d(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px, 0)`,
            }}
          ></div>
          <div
            className="absolute top-1/4 right-1/4 w-24 h-24 bg-clay rounded-full blur-xl animate-pulse-soft"
            style={{
              transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0)`,
            }}
          ></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-moss rounded-full blur-lg animate-float-slow"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none will-change-transform">
          <svg
            className="absolute top-32 left-8 w-20 h-20 text-eucalyptus/20 animate-rotate-slow"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 10 C70 30, 90 50, 70 70 C50 90, 30 70, 10 50 C30 30, 50 10, 50 10 Z" />
            <circle cx="50" cy="50" r="15" fill="white" opacity="0.4" />
          </svg>
          <svg
            className="absolute bottom-40 right-12 w-16 h-16 text-terracotta/30 animate-float"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="40" />
            <circle cx="30" cy="30" r="12" fill="white" opacity="0.5" />
            <circle cx="70" cy="70" r="8" fill="white" opacity="0.3" />
          </svg>
          <svg
            className="absolute top-1/2 right-8 w-12 h-12 text-sage/25 animate-pulse-soft"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <polygon points="50,10 90,90 10,90" />
          </svg>
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto text-center space-y-8 transition-all duration-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-script text-2xl md:text-4xl text-eucalyptus font-medium animate-shimmer bg-gradient-to-r from-eucalyptus via-sage to-eucalyptus bg-[length:200%_100%] bg-clip-text text-transparent">
                Welcome to our world of
              </p>
              <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] font-black text-foreground leading-none text-balance text-shadow-soft">
                Handcrafted
                <span className="block text-gradient font-script text-6xl md:text-8xl lg:text-9xl mt-2 animate-fade-in-up-delayed">
                  with Love
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed text-balance opacity-90">
              Discover our collection of artisan treasures, each piece thoughtfully created to bring warmth, beauty, and
              soul into your everyday moments. Every creation tells a story of passion, tradition, and timeless
              craftsmanship.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 transition-all duration-1200 delay-400 ${isVisible ? "animate-fade-in-up-delayed" : "opacity-0"}`}
          >
            <Button
              size="lg"
              onClick={() => setShowProductModal(true)}
              className="gradient-eucalyptus hover:shadow-artisan-xl text-white px-16 py-8 text-xl font-semibold rounded-3xl shadow-artisan-lg transition-all duration-500 hover-lift hover-glow group relative overflow-hidden will-change-transform"
            >
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                Explore Collection
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowContactModal(true)}
              className="border-3 border-eucalyptus text-eucalyptus hover:bg-eucalyptus hover:text-white px-16 py-8 text-xl font-semibold rounded-3xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:shadow-artisan-xl hover-lift relative overflow-hidden group will-change-transform"
            >
              <span className="relative z-10">Our Story</span>
              <div className="absolute inset-0 bg-eucalyptus scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>

          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-600 ${isVisible ? "animate-fade-in-up-delayed" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">Scroll to explore</p>
              <div className="relative">
                <div className="w-px h-24 bg-gradient-to-b from-eucalyptus via-sage to-transparent animate-pulse"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-eucalyptus rounded-full animate-pulse-soft shadow-artisan"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcaseModal
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
        product={sampleProduct}
      />

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

      <NewsletterModal isOpen={showNewsletterModal} onClose={() => setShowNewsletterModal(false)} />
    </>
  )
}
