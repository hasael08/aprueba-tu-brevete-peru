import { Heart, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* App Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins">Simulacro Examen MTC Perú</h3>
            <p className="text-muted font-poppins leading-relaxed">
              La herramienta más confiable para aprobar tu examen de manejo. 
              Creada por peruanos, para peruanos.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span className="font-poppins">Hecho con amor en Perú</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Enlaces</h4>
            <ul className="space-y-2 font-poppins">
              <li>
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted hover:text-background transition-colors duration-200 flex items-center gap-2"
                >
                  <ExternalLink className="h-3 w-3" />
                  Descargar App
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gob.pe/mtc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted hover:text-background transition-colors duration-200 flex items-center gap-2"
                >
                  <ExternalLink className="h-3 w-3" />
                  MTC Oficial
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Categorías Disponibles</h4>
            <div className="grid grid-cols-2 gap-2 font-poppins text-sm">
              <div className="text-muted">• A1 - Moto</div>
              <div className="text-muted">• A2 - Moto</div>
              <div className="text-muted">• B2-I - Auto</div>
              <div className="text-muted">• B2-II - Auto</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-muted/20 mt-8 pt-8 text-center">
          <p className="text-muted font-poppins text-sm">
            © 2025 Simulacro Examen MTC Perú. Todos los derechos reservados.
          </p>
          <p className="text-muted font-poppins text-xs mt-2">
            Esta aplicación no está afiliada oficialmente al MTC. 
            Las preguntas están basadas en el balotario oficial público.
          </p>
        </div>
      </div>
    </footer>
  );
}