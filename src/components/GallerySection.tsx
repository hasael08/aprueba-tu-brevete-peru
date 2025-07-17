import screenshot1 from "@/assets/app-screenshot-1.jpg";
import screenshot2 from "@/assets/app-screenshot-2.jpg";
import screenshot3 from "@/assets/app-screenshot-3.jpg";

const screenshots = [
  {
    src: screenshot1,
    alt: "Pregunta de examen con imagen de señal de tránsito",
    title: "Preguntas Reales con Imágenes"
  },
  {
    src: screenshot2,
    alt: "Pantalla de resultados del examen",
    title: "Resultados Detallados"
  },
  {
    src: screenshot3,
    alt: "Selección de categorías de licencia",
    title: "Todas las Categorías"
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Así funciona nuestra app
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-poppins">
            Una interfaz intuitiva diseñada para que te concentres en estudiar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto max-w-[250px] mx-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-center mt-4 text-foreground font-poppins">
                {screenshot.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-poppins">
            💡 <strong>Tip:</strong> Prueba el modo nocturno para estudiar cómodamente en cualquier momento
          </p>
        </div>
      </div>
    </section>
  );
}