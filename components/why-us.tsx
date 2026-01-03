import { Sparkles, Brain, Users2, Clock3 } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Wciągające historie",
    description: "Każdy pokój to starannie zaprojektowana narracja pełna zwrotów akcji i tajemnic do odkrycia.",
  },
  {
    icon: Brain,
    title: "Profesjonalne zagadki",
    description: "Logiczne i kreatywne wyzwania, które sprawdzą twoje umiejętności rozwiązywania problemów.",
  },
  {
    icon: Users2,
    title: "Idealne dla grup",
    description: "Doskonała rozrywka dla znajomych, rodzin i integracji firmowych. Wspólna praca to klucz.",
  },
  {
    icon: Clock3,
    title: "Podróże w czasie",
    description: "Unikalne motywy czasowe przeniosą cię do różnych epok i alternatywnych rzeczywistości.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">Dlaczego Lock in Time</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Doświadczenie, które wykracza poza zwykły escape room
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
