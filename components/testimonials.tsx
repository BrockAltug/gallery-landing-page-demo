"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  
  const testimonials = [
    {
      quote:
        "Each piece I've purchased has brought such warmth and character to my home. The quality and attention to detail is extraordinary.",
      author: "Sarah Chen",
      role: "Interior Designer",
      location: "San Francisco, CA",
      rating: 5,
      image: "/professional-interior-designer.png",
    },
    {
      quote:
        "There's something magical about owning something made by hand. You can feel the love and care that went into creating it.",
      author: "Michael Rodriguez",
      role: "Art Collector",
      location: "Austin, TX",
      rating: 5,
      image: "/distinguished-art-collector.png",
    },
    {
      quote: "The craftsmanship is unparalleled. These aren't just products—they're works of art that tell a story.",
      author: "Emma Thompson",
      role: "Home Enthusiast",
      location: "Portland, OR",
      rating: 5,
      image: "/friendly-home-enthusiast.png",
    },
    {
      quote:
        "As a chef, I appreciate quality and authenticity. These handcrafted pieces have elevated my restaurant's ambiance.",
      author: "James Wilson",
      role: "Chef & Restaurant Owner",
      location: "Nashville, TN",
      rating: 5,
      image: "/chef-owner-portrait.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Increased interval for better reading time

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      clearInterval(timer)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [testimonials.length])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 px-6 gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-24 left-16 w-48 h-48 bg-eucalyptus/15 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-16 right-12 w-56 h-56 bg-terracotta/12 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-clay/20 rounded-full blur-2xl animate-pulse-soft"
          style={{
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center space-y-4 mb-12 transition-all duration-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-eucalyptus to-transparent"></div>
            <p className="font-script text-xl md:text-2xl text-eucalyptus animate-shimmer bg-gradient-to-r from-eucalyptus via-sage to-eucalyptus bg-[length:200%_100%] bg-clip-text text-transparent">
              What People Say
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-eucalyptus via-transparent to-transparent"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-none text-shadow-soft">
            Cherished by
            <span className="block font-script text-gradient text-3xl md:text-4xl lg:text-5xl mt-1">Many</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-artisan-xl text-center space-y-4 hover-lift">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-artisan-lg">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-eucalyptus" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-lg md:text-xl leading-relaxed text-foreground font-light italic text-balance">
                        "{testimonial.quote}"
                      </p>

                      <div className="space-y-1 pt-2">
                        <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-eucalyptus font-semibold text-sm">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 hover-lift ${
                  index === currentIndex
                    ? "gradient-eucalyptus scale-125 shadow-artisan"
                    : "bg-eucalyptus/30 hover:bg-eucalyptus/60 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-1200 delay-500 ${isVisible ? "animate-fade-in-up-delayed" : "opacity-0"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "4.9", label: "Average Rating" },
              { number: "98%", label: "Would Recommend" },
              { number: "35+", label: "Years in Business" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-2 hover-lift bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-artisan cursor-pointer transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div
                  className={`font-display text-2xl md:text-3xl font-black transition-all duration-300 ${
                    hoveredStat === index ? "text-eucalyptus scale-110" : "text-gradient"
                  }`}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
