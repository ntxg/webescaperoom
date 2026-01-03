import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Anna Kowalska",
    rating: 5,
    text: "Niesamowite doświadczenie! Laboratorium Tesli było pełne niespodzianek. Zagadki były wymagające, ale sprawiedliwe. Już planujemy następną wizytę!",
    room: "Laboratorium Tesli",
  },
  {
    name: "Michał Nowak",
    rating: 5,
    text: "Najlepszy escape room, w jakim byliśmy! Scenografia jest po prostu oszałamiająca, a atmosfera wciąga od pierwszej sekundy. Paradoks Czasowy to must-have!",
    room: "Paradoks Czasowy",
  },
  {
    name: "Katarzyna Wiśniewska",
    rating: 5,
    text: "Świetna integracja firmowa! Wszyscy byli zachwyceni. Profesjonalna obsługa i przemyślane zagadki. Zdecydowanie polecamy dla zespołów.",
    room: "Zaginiony Mechanizm",
  },
  {
    name: "Piotr Lewandowski",
    rating: 5,
    text: "Ostatnia Godzina to prawdziwe wyzwanie! Idealne dla doświadczonych graczy. Adrenalina do ostatniej minuty. Wróciliśmy z poczuciem wielkiego osiągnięcia.",
    room: "Ostatnia Godzina",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">Co mówią nasi goście</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setki udanych ucieczek i niezapomnianych wspomnień
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.room}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
