import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";

const benefits = [
  "Balotario oficial del MTC 2025",
  "Simulacros ilimitados y gratuitos", 
  "Explicaciones detalladas",
  "Sin anuncios molestos",
  "Modo offline disponible"
];

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
            ¿Listo para obtener tu
            <span className="block text-yellow-300">brevete?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-poppins font-light">
            No dejes tu examen a la suerte. Descarga la aplicación ahora y únete a los 
            <span className="font-semibold text-white"> miles de peruanos</span> que ya aseguraron su licencia.
          </p>
          
          {/* Benefits list */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-white font-poppins text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-poppins font-bold text-xl px-12 py-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
              asChild
            >
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-3 h-6 w-6" />
                Descargar Gratis en Google Play
              </a>
            </Button>
            
            <div className="text-blue-100 font-poppins">
              <p className="text-sm">✅ Descarga gratuita • ✅ Sin registro requerido • ✅ Funciona offline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}