import { Button } from "@/components/ui/button"
import { Clock, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 animate-gear-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="10" r="5" fill="currentColor" />
            <circle cx="90" cy="50" r="5" fill="currentColor" />
            <circle cx="50" cy="90" r="5" fill="currentColor" />
            <circle cx="10" cy="50" r="5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-48 h-48 animate-gear-slower">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="15" r="6" fill="currentColor" />
            <circle cx="85" cy="50" r="6" fill="currentColor" />
            <circle cx="50" cy="85" r="6" fill="currentColor" />
            <circle cx="15" cy="50" r="6" fill="currentColor" />
            <circle cx="73" cy="27" r="4" fill="currentColor" />
            <circle cx="73" cy="73" r="4" fill="currentColor" />
            <circle cx="27" cy="73" r="4" fill="currentColor" />
            <circle cx="27" cy="27" r="4" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6 gap-2">
          <Clock className="w-8 h-8 text-primary" />
          <div className="h-px w-12 bg-primary" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance tracking-tight">
          Lock in Time
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
          Czy zdążysz uciec, zanim czas się skończy?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
          >
            Zarezerwuj pokój
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-foreground hover:bg-primary/10 transition-all hover:scale-105 bg-transparent"
          >
            Zobacz pokoje
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}
