import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Zap, 
  Scan, 
  Terminal,
  Calendar,
  Camera,
  PhoneCall,
  ArrowRight,
  Star,
  CheckCircle2,
  Heart
} from 'lucide-react';

// Ativos Originais
import lashesImg from './assets/lashes.png';
import lipsImg from './assets/lips.png';
import browsImg from './assets/brows.png';
import nailsImg from './assets/nails.png';
import heroImg from './assets/hero.png';
import kellyImg from './assets/kelly.png';
import nayaraImg from './assets/nayara.png';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'bg-vapor-night/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-vapor-accent flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif italic text-2xl tracking-tighter text-white uppercase">Bella Beauty</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono tracking-[0.2em] text-vapor-light/60">
          <a href="#servicos" className="hover:text-vapor-accent transition-colors">SERVIÇOS</a>
          <a href="#precos" className="hover:text-vapor-accent transition-colors">TABELA</a>
          <a href="#especialistas" className="hover:text-vapor-accent transition-colors">EQUIPE</a>
          <a href="#contato" className="hover:text-vapor-accent transition-colors">CONTATO</a>
        </div>

        <button className="bg-vapor-accent/10 border border-vapor-accent/30 text-vapor-accent px-6 py-2.5 rounded-full text-xs font-bold hover:bg-vapor-accent hover:text-white transition-all duration-300">
          AGENDAR AGORA
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
      
      gsap.to(".hero-image", {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="hero-content z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vapor-accent/10 border border-vapor-accent/20 text-vapor-accent text-[10px] font-mono uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-vapor-accent animate-pulse" />
            Studio Premium em Jaconé
          </div>
          <h1 className="text-7xl md:text-9xl leading-[0.9] font-serif italic text-white">
            Beauty <br/> <span className="text-vapor-accent not-italic font-sans font-black uppercase">Studio</span>
          </h1>
          <p className="text-lg text-vapor-light/50 max-w-md font-light leading-relaxed">
            Especialistas em realçar sua beleza natural com o equilíbrio perfeito entre arte e tecnologia. Onde cada detalhe é uma assinatura de perfeição.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="btn-primary">
              Ver Tratamentos
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-vapor-night bg-vapor-card" />
              ))}
              <div className="pl-6 text-xs font-mono text-vapor-light/30">
                +200 Clientes Satisfeitas
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-10 bg-vapor-accent/20 blur-[120px] rounded-full opacity-30 animate-pulse" />
          <div className="hero-image glass-card h-[600px] w-full relative z-10 border-white/5">
            <img src={heroImg} alt="Beauty Studio" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-8 right-8 p-6 glass-card bg-vapor-night/80 border-vapor-accent/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-vapor-accent flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white">4.9/5.0</span>
                <span className="text-[10px] font-mono text-white/40 uppercase">Avaliação Jaconé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BannerTrust = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between gap-12 items-center opacity-40">
        <span className="font-serif italic text-2xl uppercase tracking-[0.2em]">Cílios</span>
        <span className="font-serif italic text-2xl uppercase tracking-[0.2em]">Sobrancelhas</span>
        <span className="font-serif italic text-2xl uppercase tracking-[0.2em]">Micropigmentação</span>
        <span className="font-serif italic text-2xl uppercase tracking-[0.2em]">Unhas</span>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    { title: "Extensão de Cílios", desc: "Volume e curvatura impecáveis para um olhar marcante.", img: lashesImg, price: "R$ 150" },
    { title: "Micropigmentação", desc: "Cor e definição labial com efeito natural e duradouro.", img: lipsImg, price: "R$ 450" },
    { title: "Design de Sobrancelhas", desc: "Harmonização facial completa com técnicas avançadas.", img: browsImg, price: "R$ 60" },
    { title: "Nail Design", desc: "Alongamento e arte que refletem sua personalidade.", img: nailsImg, price: "R$ 120" },
  ];

  return (
    <section id="servicos" className="py-32 px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl italic">Tratamentos <br/> <span className="text-vapor-accent not-italic font-bold">Exclusivos</span></h2>
            <p className="text-vapor-light/40 font-mono text-sm tracking-widest uppercase">Resultados que transformam</p>
          </div>
          <button className="text-sm font-bold border-b-2 border-vapor-accent pb-2 hover:text-vapor-accent transition-colors">VER DETALHES</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-96 glass-card mb-8 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-vapor-night via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-mono bg-vapor-accent px-3 py-1 rounded-full">{s.price}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl italic mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-vapor-light/40 font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingTable = () => {
  return (
    <section id="precos" className="py-32 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-5xl italic">Tabela de <br/> <span className="text-vapor-accent not-italic font-bold">Investimento</span></h2>
          <p className="text-vapor-light/40 leading-relaxed font-light italic">Valores base para os procedimentos principais. Consulte avaliações para casos personalizados.</p>
          
          <div className="space-y-4">
            {[
              { n: "Extensão Classica", p: "R$ 130" },
              { n: "Volume Híbrido", p: "R$ 160" },
              { n: "Retoque (15 dias)", p: "R$ 80" },
              { n: "Limpeza de Pele Pro", p: "R$ 180" }
            ].map(item => (
              <div key={item.n} className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-vapor-accent/50 transition-colors">
                <span className="text-vapor-light/60 group-hover:text-white transition-colors uppercase font-mono text-xs">{item.n}</span>
                <span className="text-vapor-accent font-bold">{item.p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-12 bg-vapor-accent flex flex-col justify-between text-white relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">Destaque do Mês</span>
            <h3 className="text-5xl font-serif italic">Spa Day <br/> Bella Beauty</h3>
            <p className="font-light opacity-80">Pacote completo com Cílios + Design de Unhas + Revitalização Facial com Nayara & Kelly.</p>
            <div className="text-6xl font-sans font-black">R$ 259,90</div>
            <ul className="space-y-3 opacity-90 text-sm">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Procedimentos rápidos e seguros</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Materiais premium certificados</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Experiência relaxante completa</li>
            </ul>
          </div>
          <button className="relative z-10 mt-12 w-full bg-white text-vapor-night py-5 rounded-full font-bold hover:bg-vapor-light transition-colors flex items-center justify-center gap-3 group/btn">
            GARANTIR MINHA VAGA
            <Zap className="w-4 h-4 fill-current group-hover/btn:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Specialists = () => {
  return (
    <section id="especialistas" className="py-32 px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-6xl italic">Especialistas em <span className="text-vapor-accent font-bold not-italic">Excelência</span></h2>
          <p className="text-vapor-light/40 font-mono text-xs tracking-widest uppercase">A arte por trás da técnica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { n: "Nayara", r: "Lashes, Micro & Brows Expert", desc: "Mestra em técnicas de alta precisão e harmonização facial avançada.", img: nayaraImg },
            { n: "Kelly", r: "Senior Nail Designer", desc: "Especialista em alongamentos, blindagem e arte em unhas de alto padrão.", img: kellyImg }
          ].map((e, i) => (
            <div key={i} className="glass-card flex flex-col md:flex-row p-8 gap-8 items-center hover:border-vapor-accent/30 transition-all group">
              <div className="w-40 h-40 rounded-full bg-vapor-accent/20 border border-white/5 relative overflow-hidden flex-shrink-0">
                <img src={e.img} alt={e.n} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <span className="text-[10px] font-mono text-vapor-accent tracking-[0.3em] uppercase">{e.r}</span>
                <h3 className="text-4xl italic text-white">{e.n}</h3>
                <p className="text-sm text-vapor-light/40 font-light leading-relaxed">{e.desc}</p>
                <div className="flex justify-center md:justify-start gap-4">
                   <Camera className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-32 px-8 bg-black relative overflow-hidden">
       <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <MapPin className="w-[800px] h-[800px] text-vapor-accent absolute top-[-200px] right-[-200px]" />
       </div>

      <div className="max-w-7xl mx-auto relative z-10 glass-card p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-6xl italic leading-tight uppercase">Sinta a <br/> <span className="text-vapor-accent font-bold not-italic">Experiência</span></h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-vapor-accent/10 border border-vapor-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-vapor-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 block mb-1 uppercase tracking-widest">Localização</span>
                <p className="text-lg font-light">Jaconé, Saquarema — RJ <br/> <span className="text-sm opacity-40 tracking-tight italic">Rua da Estética, Próximo ao Centro</span></p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-vapor-accent/10 border border-vapor-accent/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-vapor-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 block mb-1 uppercase tracking-widest">Horários</span>
                <p className="text-lg font-light">Terça a Sábado <br/> <span className="text-sm opacity-40 tracking-tight italic">09h às 18h</span></p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-vapor-accent/10 border border-vapor-accent/20 flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-6 h-6 text-vapor-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 block mb-1 uppercase tracking-widest">Contato Direto</span>
                <p className="text-lg font-light">+55 (22) 99999-9999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 bg-vapor-night/50 border-white/5 space-y-8">
           <h3 className="text-2xl font-serif italic">Dúvidas ou Pré-Avaliação?</h3>
           <p className="text-sm text-white/40 font-light">Mande uma mensagem e nossa equipe retornará em instantes.</p>
           <form className="space-y-6">
              <input type="text" placeholder="Seu Nome" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-vapor-accent transition-colors text-sm" />
              <input type="text" placeholder="Serviço de Interesse" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-vapor-accent transition-colors text-sm" />
              <button className="w-full btn-primary justify-center py-6 text-sm uppercase tracking-widest">Enviar Mensagem</button>
           </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-vapor-night pt-32 pb-16 px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="space-y-6">
           <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-vapor-accent" />
            <span className="font-serif italic text-3xl text-white uppercase tracking-tighter">Bella Beauty</span>
          </div>
          <p className="text-sm text-vapor-light/30 max-w-xs font-light tracking-wide">
            Transformando o autocuidado em Saquarema através da fusão entre arte clássica e tecnologia estética.
          </p>
        </div>
        
        <div className="flex gap-20">
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-vapor-accent uppercase tracking-[0.3em]">Navegação</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li><a href="#" className="hover:text-vapor-accent transition-all">Inicio</a></li>
              <li><a href="#servicos" className="hover:text-vapor-accent transition-all">Tratamentos</a></li>
              <li><a href="#precos" className="hover:text-vapor-accent transition-all">Investimento</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-vapor-accent uppercase tracking-[0.3em]">Links</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li className="flex items-center gap-2"><Camera className="w-4 h-4" /> Instagram</li>
              <li className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">© 2026 Bella Beauty Studio</span>
        <div className="flex items-center gap-4">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">System Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="bg-vapor-night text-vapor-light perspective-1000 overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <BannerTrust />
      <ServiceSection />
      <PricingTable />
      <Specialists />
      <Contact />
      <Footer />
    </main>
  );
}
