import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaDiscord } from "react-icons/fa";
import { Code2, Users, LifeBuoy, Zap, Shield, GraduationCap, Terminal, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Decorative glow */}
        <div className="hero-glow top-20 left-1/2 -translate-x-1/2 opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Communauté active & ouverte à tous
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Développez vos <br />
            <span className="text-gradient">Bots Discord</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez Dexus, la communauté francophone de référence pour apprendre, 
            partager et créer des bots Discord exceptionnels.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 w-full sm:w-auto"
              onClick={() => window.open("https://discord.gg/Ncw85M8DD9", "_blank")}
            >
              <FaDiscord className="mr-2 w-6 h-6" />
              Rejoindre Dexus
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-xl border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              En savoir plus
            </Button>
          </div>
        </motion.div>

        {/* Hero Code Snippet Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 w-full max-w-3xl glass-card rounded-xl p-4 md:p-6 overflow-hidden relative group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-left font-mono text-sm md:text-base text-muted-foreground space-y-1 overflow-x-auto">
            <div className="flex"><span className="text-purple-400">const</span> <span className="text-blue-400 ml-2">client</span> <span className="text-white ml-2">=</span> <span className="text-purple-400 ml-2">new</span> <span className="text-yellow-300 ml-2">Client</span><span className="text-white">();</span></div>
            <div className="flex"><span className="text-blue-400">client</span><span className="text-white">.</span><span className="text-yellow-300">on</span><span className="text-white">(</span><span className="text-green-400">'ready'</span><span className="text-white">, () </span><span className="text-purple-400">=&gt;</span> <span className="text-white">{`{`}</span></div>
            <div className="flex pl-4"><span className="text-blue-400">console</span><span className="text-white">.</span><span className="text-yellow-300">log</span><span className="text-white">(</span><span className="text-green-400">`Logged in as Dexus!`</span><span className="text-white">);</span></div>
            <div className="flex"><span className="text-white">{`});`}</span></div>
            <div className="flex text-gray-500 mt-2">// Rejoignez-nous pour apprendre la suite !</div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de Dexus</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dexus n'est pas juste un autre serveur Discord. C'est un écosystème conçu pour les développeurs, par des développeurs. 
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre mission est simple : démocratiser le développement de bots Discord en offrant un espace bienveillant où l'entraide est la règle d'or. Que vous soyez un expert cherchant à partager son savoir ou un débutant écrivant sa première ligne de code, vous avez votre place ici.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Support 100% gratuit et bénévole",
                  "Communauté active 24/7",
                  "Bienveillance et respect mutuel"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="glass-card p-6 rounded-2xl">
                    <Terminal className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold mb-1">Code</h3>
                    <p className="text-sm text-muted-foreground">JavaScript, Python, Java...</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl">
                    <LifeBuoy className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="font-bold mb-1">Entraide</h3>
                    <p className="text-sm text-muted-foreground">Réponses rapides</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-2xl">
                    <Shield className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="font-bold mb-1">Sécurité</h3>
                    <p className="text-sm text-muted-foreground">Bonnes pratiques</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl">
                    <Rocket className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="font-bold mb-1">Projets</h3>
                    <p className="text-sm text-muted-foreground">Showcase vos créations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="features" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ce que Dexus propose</h2>
          <p className="text-lg text-muted-foreground">
            Tout ce dont vous avez besoin pour réussir votre projet de bot, réuni au même endroit.
          </p>
        </div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Code2 className="w-8 h-8 text-primary" />,
              title: "Aide au Développement",
              desc: "Bloqué sur une erreur ? Nos experts vous guident vers la solution."
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Support Technique",
              desc: "Configuration VPS, bases de données, hébergement... On couvre tout."
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-green-400" />,
              title: "Partage de Ressources",
              desc: "Accédez à des snippets de code, des templates et des tutoriels exclusifs."
            },
            {
              icon: <Users className="w-8 h-8 text-purple-400" />,
              title: "Collaboration",
              desc: "Trouvez des partenaires pour vos projets ou rejoignez une équipe."
            }
          ].map((feature, i) => (
            <motion.div key={i} variants={fadeIn} className="group">
              <Card className="h-full bg-card/40 border-white/5 p-6 hover:bg-card/60 transition-colors hover:border-primary/20">
                <div className="mb-6 p-3 rounded-lg bg-background w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 md:opacity-10 pointer-events-none">
              <FaDiscord className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Pourquoi rejoindre Dexus ?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <span className="font-bold text-xl">0€</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">100% Gratuit</h3>
                      <p className="text-muted-foreground text-sm">Aucun frais caché, aucun contenu payant. Le savoir doit être libre.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Pour tous niveaux</h3>
                      <p className="text-muted-foreground text-sm">Du "Hello World" aux architectures micro-services complexes.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                      <span className="font-bold">❤</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Passionnés</h3>
                      <p className="text-muted-foreground text-sm">Une équipe de staff et de membres passionnés par le code.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Support Rapide</h3>
                      <p className="text-muted-foreground text-sm">Ne restez jamais bloqué longtemps. La communauté est réactive.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <Button 
                  size="lg"
                  className="h-12 px-8 text-base font-semibold bg-white text-black hover:bg-gray-200 transition-colors"
                  onClick={() => window.open("https://discord.gg/Ncw85M8DD9", "_blank")}
                >
                  <FaDiscord className="mr-2 w-5 h-5 text-[#5865F2]" />
                  Rejoindre le serveur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à coder ?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Rejoignez des centaines de développeurs et commencez à créer dès aujourd'hui.
        </p>
        <Button 
          size="lg"
          className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1"
          onClick={() => window.open("https://discord.gg/Ncw85M8DD9", "_blank")}
        >
          Rejoindre l'aventure
        </Button>
      </section>

      <Footer />
    </div>
  );
}
