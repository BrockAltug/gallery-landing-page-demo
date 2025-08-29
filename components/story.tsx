"use client"

import { useState, useEffect, useRef } from "react"

export default function Story() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      observer.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-16 right-16 w-40 h-40 bg-eucalyptus/20 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-12 w-48 h-48 bg-terracotta/15 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-clay/25 rounded-full blur-2xl animate-pulse-soft"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-24 left-12 w-16 h-16 text-eucalyptus/20 animate-rotate-slow"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 C70 30, 90 50, 70 70 C50 90, 30 70, 10 50 C30 30, 50 10, 50 10 Z" />
          <circle cx="50" cy="50" r="12" fill="white" opacity="0.6" />
        </svg>
        <svg
          className="absolute bottom-32 right-20 w-12 h-12 text-terracotta/25 animate-float"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="50,15 85,85 15,85" />
          <circle cx="50" cy="60" r="8" fill="white" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          <div
            className={`space-y-8 transition-all duration-1200 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-24 h-px bg-gradient-to-r from-eucalyptus to-sage"></div>
                <p className="font-script text-2xl md:text-3xl text-eucalyptus font-medium">Our Journey</p>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none text-shadow-soft">
                Crafted with
                <span className="block font-script text-gradient text-5xl md:text-6xl lg:text-7xl mt-2 animate-shimmer bg-gradient-to-r from-eucalyptus via-sage to-terracotta bg-[length:200%_100%] bg-clip-text text-transparent">
                  Intention
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-warm-gray">
              <p className="text-balance opacity-90">
                Born from a passion for authentic craftsmanship, our studio began as a small workshop where every piece
                was lovingly shaped by hand. We believe in the beauty of imperfection and the soul that comes from human
                touch.
              </p>
              <p className="text-balance opacity-90">
                Each creation tells a story—of the artisan who crafted it, the materials sourced from nature, and the
                love poured into every detail. We're not just making products; we're preserving traditions and creating
                heirlooms for generations to come.
              </p>
              <p className="text-balance opacity-90">
                Our commitment to sustainability and ethical practices ensures that every purchase supports both our
                artisan community and the environment we cherish deeply.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-6 hover-lift bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-artisan">
                <div className="w-16 h-16 rounded-full gradient-eucalyptus flex items-center justify-center shadow-artisan">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Sustainably Sourced</p>
                  <p className="text-sm text-muted-foreground">Every material tells a story of respect</p>
                </div>
              </div>

              <div className="flex items-center gap-6 hover-lift bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-artisan">
                <div className="w-16 h-16 rounded-full gradient-terracotta flex items-center justify-center shadow-artisan">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Award-Winning Craft</p>
                  <p className="text-sm text-muted-foreground">Recognized excellence in artisan work</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1200 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-artisan-xl bg-gradient-to-br from-sand to-cream hover-glow">
                <img
                  src="/artisan-potter.png"
                  alt="Artisan crafting pottery with focused attention"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-artisan-xl max-w-xs hover-lift">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 gradient-eucalyptus rounded-full animate-pulse shadow-artisan"></div>
                    <p className="font-semibold text-sm text-foreground">Handcrafted Since 1987</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Over three decades of preserving traditional artisan techniques with modern innovation
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-eucalyptus/20 border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">500+ artisans</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-terracotta/15 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-eucalyptus/25 rounded-full blur-xl animate-float-delayed"></div>
              <div className="absolute top-1/4 -right-4 w-16 h-16 bg-clay/20 rounded-full blur-lg animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
