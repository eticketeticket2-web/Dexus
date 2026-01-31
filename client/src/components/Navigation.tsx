import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl font-display">
              D
            </div>
            <span className="text-xl font-bold font-display tracking-tight">Dexus</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("why-join")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pourquoi nous ?
            </button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 gap-2"
              onClick={() => window.open("https://discord.gg/Ncw85M8DD9", "_blank")}
            >
              <FaDiscord className="w-5 h-5" />
              Rejoindre
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-background"
          >
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection("about")} className="text-left py-2 text-muted-foreground hover:text-primary">
                À propos
              </button>
              <button onClick={() => scrollToSection("features")} className="text-left py-2 text-muted-foreground hover:text-primary">
                Services
              </button>
              <button onClick={() => scrollToSection("why-join")} className="text-left py-2 text-muted-foreground hover:text-primary">
                Pourquoi nous ?
              </button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 gap-2"
                onClick={() => window.open("https://discord.gg/Ncw85M8DD9", "_blank")}
              >
                <FaDiscord className="w-5 h-5" />
                Rejoindre Discord
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
