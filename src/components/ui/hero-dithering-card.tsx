import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function HeroDitheringCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-4 w-full flex justify-center items-center px-6 mb-8">
      <div
        className="w-full max-w-6xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500 py-16">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#EC4E02"  // Accent
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Engineering Excellence
            </div>

            {/* Headline */}
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 leading-[1.05]">
              Raising SaaS <br />
              <span className="text-foreground/80">from the East.</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              We craft robust, beautiful software experiences. From point-of-sale systems to modern web applications, Eastrix Labs is your parent company for scalable tools.
            </p>

            {/* Button */}
            <a href="#contact" className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-12 text-base font-medium text-background transition-all duration-300 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-foreground/20">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}