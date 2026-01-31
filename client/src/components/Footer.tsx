import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl font-display">
                D
              </div>
              <span className="text-xl font-bold font-display tracking-tight">Dexus</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              La communauté de référence pour les développeurs de bots Discord. 
              Entraide, partage et progression ensemble.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-join" className="hover:text-primary transition-colors">Avantages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-pointer hover:text-primary transition-colors">Mentions légales</span></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Politique de confidentialité</span></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Conditions d'utilisation</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dexus. Serveur communautaire indépendant.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://discord.gg/Ncw85M8DD9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#5865F2] transition-colors">
              <FaDiscord className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
