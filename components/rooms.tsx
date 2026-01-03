import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data - ready for Strapi integration
const rooms = [
  {
    id: 1,
    name: "Laboratorium Tesli",
    difficulty: "Średni",
    duration: "60 min",
    players: "2-6",
    image: "/steampunk-laboratory-with-tesla-coils-and-vintage-.jpg",
    description: "Wejdź do tajemniczego laboratorium wielkiego wynalazcy",
  },
  {
    id: 2,
    name: "Paradoks Czasowy",
    difficulty: "Trudny",
    duration: "75 min",
    players: "3-7",
    image: "/time-portal-with-glowing-clocks-and-mysterious-atm.jpg",
    description: "Napraw pęknięcie w kontinuum czasoprzestrzennym",
  },
  {
    id: 3,
    name: "Zaginiony Mechanizm",
    difficulty: "Łatwy",
    duration: "45 min",
    players: "2-5",
    image: "/victorian-clockwork-mechanism-room-with-gears-and-.jpg",
    description: "Odnajdź zagubione serce mechanicznego zegara",
  },
  {
    id: 4,
    name: "Ostatnia Godzina",
    difficulty: "Ekspert",
    duration: "90 min",
    players: "4-8",
    image: "/dark-clocktower-interior-with-dramatic-lighting.jpg",
    description: "Powstrzymaj apokalipsę zanim wybije północ",
  },
]

const difficultyColors = {
  Łatwy: "bg-green-500/20 text-green-400 border-green-500/50",
  Średni: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  Trudny: "bg-orange-500/20 text-orange-400 border-orange-500/50",
  Ekspert: "bg-red-500/20 text-red-400 border-red-500/50",
}

export default function Rooms() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">Nasze Pokoje</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wybierz swoją przygodę przez czas. Każdy pokój to unikalna historia czekająca na odkrycie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">
                    {room.name}
                  </h3>
                  <Badge className={`${difficultyColors[room.difficulty as keyof typeof difficultyColors]} border`}>
                    {room.difficulty}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>

                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{room.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{room.players} graczy</span>
                  </div>
                </div>

                <Button className="w-full bg-primary/10 text-foreground border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all">
                  Szczegóły
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
