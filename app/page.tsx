import Hero from "@/components/hero"
import Story from "@/components/story"
import ImageTextModules from "@/components/image-text-modules"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <ImageTextModules />
      <Testimonials />
      <Footer />
    </main>
  )
}

