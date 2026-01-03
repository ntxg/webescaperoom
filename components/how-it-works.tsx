import { Search, Calendar, Unlock } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Wybierz pokój",
    description: "Przeglądaj naszą ofertę i znajdź pokój odpowiedni dla Twojej grupy i poziomu zaawansowania.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Zarezerwuj termin",
    description: "Wybierz dogodny dla siebie termin i dokonaj szybkiej rezerwacji online.",
  },
  {
    icon: Unlock,
    number: "03",
    title: "Ucieknij w czasie",
    description: "Przyjdź o umówionym czasie i rozpocznij ekscytującą przygodę przez wymiary czasu.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-primary/30 hidden lg:block" />

      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">Jak to działa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trzy proste kroki dzielą Cię od niesamowitej przygody
          </p>
        </div>

        <div className="space-y-16 lg:space-y-32 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block mb-4">
                  <span className="text-6xl font-serif font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-balance">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
              </div>

              {/* Icon */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10">
                  <step.icon className="w-14 h-14 text-primary" />
                </div>
                <div
                  className="absolute inset-0 rounded-full bg-primary/5 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
