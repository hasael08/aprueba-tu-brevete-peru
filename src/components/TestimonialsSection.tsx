import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Carlos G.",
    location: "Lima",
    text: "¡Increíble! Practiqué una semana con la app y aprobé con 38 de 40. Las preguntas son idénticas a las del examen. ¡100% recomendada!",
    rating: 5,
    category: "B2-I"
  },
  {
    name: "Sofia R.",
    location: "Arequipa", 
    text: "La opción de desbloquear las explicaciones me ayudó a entender por qué fallaba. El modo oscuro es genial para estudiar de noche. ¡Gracias!",
    rating: 5,
    category: "A1"
  },
  {
    name: "Miguel P.",
    location: "Trujillo",
    text: "Como instructor de manejo, recomiendo esta app a todos mis alumnos. El contenido está actualizado y es muy completo. Excelente trabajo.",
    rating: 5,
    category: "Instructor"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            ¡Miles ya aprobaron con nuestra ayuda!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-poppins">
            Lee lo que dicen quienes ya obtuvieron su brevete usando nuestra app
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-scale-in bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-muted-foreground italic leading-relaxed font-poppins text-center">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author info */}
                <div className="text-center border-t pt-4">
                  <div className="font-semibold text-foreground font-poppins">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </div>
                  <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full inline-block mt-2 font-poppins">
                    {testimonial.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-success/10 text-success px-6 py-3 rounded-full inline-block font-poppins font-semibold">
            ⭐ Más de 10,000 peruanos ya obtuvieron su brevete con nosotros
          </div>
        </div>
      </div>
    </section>
  );
}