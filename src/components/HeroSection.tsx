import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-glow to-primary-glow min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-glow/90" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
              Aprueba tu Examen de Manejo a la
              <span className="block text-yellow-300">Primera</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-poppins font-light">
              La app #1 de simulacro y estudio para el examen de reglas del MTC en Perú. 
              <span className="font-medium text-white">Actualizada al 2025</span> y con preguntas oficiales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-poppins font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                asChild
              >
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Descargar Gratis en Google Play
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-poppins">Miles ya aprobaron</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-poppins">100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-poppins">Actualizado 2025</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Simulacro Examen MTC Perú - App de práctica para licencia de conducir"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl scale-105 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}