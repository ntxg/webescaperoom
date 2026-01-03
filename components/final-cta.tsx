import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 rounded-full bg-primary blur-[120px]" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <Clock className="w-12 h-12 text-primary animate-pulse" />
        </div>

        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">Zegar tyka...</h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Nie trać czasu. Zarezerwuj swoją przygodę już dziś i odkryj tajemnice czasu.
        </p>

        <Button
          size="lg"
          className="text-xl px-12 py-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-110 shadow-lg shadow-primary/20"
        >
          Zarezerwuj teraz
        </Button>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Lock in Time © 2025 • Wszystkie prawa zastrzeżone</p>
        </div>
      </div>
    </section>
  )
}
