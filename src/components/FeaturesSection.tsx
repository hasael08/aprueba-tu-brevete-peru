import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Lightbulb, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Balotario Completo",
    description: "Accede a todas las preguntas de las categorías A y B, incluyendo las que tienen imágenes, tal como en el examen real."
  },
  {
    icon: Clock,
    title: "Simulacros Ilimitados",
    description: "Practica con exámenes de 40 preguntas y 40 minutos. Nuestro sistema selecciona preguntas aleatorias para que cada prueba sea un nuevo reto."
  },
  {
    icon: Lightbulb,
    title: "Modo Estudio y Explicaciones",
    description: "Aprende de tus errores. Revisa las respuestas correctas y desbloquea explicaciones detalladas para entender las normas a fondo."
  },
  {
    icon: BarChart3,
    title: "Historial y Progreso",
    description: "Guarda tus resultados, revisa tus exámenes pasados y mira cómo mejoras con el tiempo para llegar preparado al día de tu prueba."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            ¿Por qué elegir nuestra app?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-poppins">
            Tenemos todo lo que necesitas para aprobar tu examen de manejo en el primer intento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center p-6 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-scale-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground font-poppins">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-poppins">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}