"use client"

import { useState, useEffect, useRef } from "react"

export default function ImageTextModules() {
  const [visibleModules, setVisibleModules] = useState<boolean[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredModule, setHoveredModule] = useState<number | null>(null)
  const moduleRefs = useRef<(HTMLDivElement | null)[]>([])

  
  const modules = [
    {
      title: "Sustainable Materials",
      subtitle: "Earth-Conscious Sourcing",
      description:
        "We source only the finest natural materials, working with local suppliers who share our commitment to environmental responsibility. Every piece begins with materials that honor both craft and planet, ensuring a legacy of beauty and sustainability.",
      image: "/ceramic-pottery-collection.png",
      reverse: false,
      stats: { number: "100%", label: "Natural Materials" },
      features: ["Locally Sourced", "Carbon Neutral", "Biodegradable"],
      icon: "🌱",
    },
    {
      title: "Artisan Techniques",
      subtitle: "Time-Honored Methods",
      description:
        "Traditional methods passed down through generations meet contemporary design, creating pieces that are both timeless and modern. Each technique is mastered through years of dedicated practice, ensuring unparalleled quality and authenticity.",
      image: "/handwoven-earth-tones.png",
      reverse: true,
      stats: { number: "35+", label: "Years Experience" },
      features: ["Hand-Forged", "Traditional Tools", "Master Crafted"],
      icon: "🔨",
    },
    {
      title: "Mindful Creation",
      subtitle: "Intentional Craftsmanship",
      description:
        "Every piece is created with intention and care, taking the time needed to ensure quality and beauty in every detail. We believe slow creation leads to lasting beauty, creating heirlooms that tell stories for generations.",
      image: "/handcrafted-wood.png",
      reverse: false,
      stats: { number: "48hrs", label: "Average Creation Time" },
      features: ["Slow Craft", "Quality Focus", "Lifetime Warranty"],
      icon: "✨",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const observers = moduleRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleModules((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      observers.forEach((observer) => observer?.disconnect())
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-32 right-20 w-56 h-56 bg-eucalyptus/15 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-40 left-16 w-40 h-40 bg-terracotta/20 rounded-full blur-2xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="space-y-4">
          <p className="font-script text-xl md:text-2xl text-eucalyptus animate-shimmer bg-gradient-to-r from-eucalyptus via-sage to-eucalyptus bg-[length:200%_100%] bg-clip-text text-transparent">
            What Makes Us Different
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-none text-balance text-shadow-soft">
            Our Craft
            <span className="block font-script text-gradient text-3xl md:text-4xl lg:text-5xl mt-1">Philosophy</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            ref={(el) => (moduleRefs.current[index] = el)}
            className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-artisan hover:shadow-artisan-xl transition-all duration-700 hover-lift hover-glow cursor-pointer ${
              visibleModules[index] ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
            onMouseEnter={() => setHoveredModule(index)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            <div className="relative mb-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-artisan bg-gradient-to-br from-sand to-cream">
                <img
                  src={module.image || "/placeholder.svg"}
                  alt={module.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-eucalyptus rounded-full flex items-center justify-center text-white text-lg shadow-artisan transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                {module.icon}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-eucalyptus to-sage"></div>
                <p className="font-script text-sm text-eucalyptus font-medium">{module.subtitle}</p>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-black text-foreground leading-tight">
                {module.title}
              </h3>
              <p className="text-sm leading-relaxed text-warm-gray opacity-90 line-clamp-3">{module.description}</p>
              <div className="flex flex-wrap gap-1">
                {module.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 bg-eucalyptus/10 text-eucalyptus rounded-full text-xs font-medium">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-eucalyptus/20">
                <div className="text-center">
                  <div className="font-display text-2xl font-black text-gradient">{module.stats.number}</div>
                  <div className="text-xs text-muted-foreground font-semibold">{module.stats.label}</div>
                </div>
                <div className="w-8 h-8 rounded-full gradient-eucalyptus flex items-center justify-center shadow-artisan transform transition-all duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-br from-eucalyptus/5 to-sage/5 rounded-2xl transition-opacity duration-500 ${
                hoveredModule === index ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  )
}
