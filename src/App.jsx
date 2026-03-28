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
  Star,
  CheckCircle2,
  Heart,
  Diamond,
  Crown,
  Camera,
  PhoneCall,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Ativos Originais
import lashesImg from './assets/lashes.png';
import lipsImg from './assets/lips.png';
import browsImg from './assets/brows.png';
import nailsImg from './assets/nails.png';
import volumeBrasileiroImg from './assets/volume-brasileiro.png';
import volumeAmericanoImg from './assets/volume-americano.png';
import salaoRealImg from './assets/salao-real.jpg';
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
          <div className="w-10 h-10 rounded-xl bg-luxury-gold flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(197,160,40,0.3)]">
            <Crown className="w-5 h-5 text-luxury-black" />
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
          <h1 className="text-7xl md:text-9xl leading-[0.9] font-serif italic text-white text-left">
            Bella Beauty <br/> <span className="text-vapor-accent not-italic font-sans font-black uppercase">Studio</span>
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
          <div className="absolute -inset-10 bg-luxury-gold/10 blur-[150px] rounded-full opacity-20" />
          <div className="hero-image glass-card h-[600px] w-full relative z-10 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img src={salaoRealImg} alt="Bella Beauty Studio" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
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
  const items = ["Cílios", "Sobrancelhas", "Micropigmentação", "Unhas"];
  
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02] marquee-container">
      <div className="marquee-content opacity-30">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span className="font-serif italic text-3xl uppercase tracking-[0.2em] whitespace-nowrap">
              {item}
            </span>
            <span className="text-luxury-gold/40 text-xl mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ServiceModal = ({ service, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!service) return null;

  const currentItem = service.items[currentIndex];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % service.items.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + service.items.length) % service.items.length);
  };

  return (
    <div className="absolute inset-0 z-[100] flex items-start justify-center p-4 bg-black/95 backdrop-blur-xl transition-all animate-in fade-in duration-300 pointer-events-auto" onClick={onClose}>
      <div 
        className="bg-[#0A0A0A] border border-luxury-gold/20 w-full max-w-5xl rounded-[3rem] overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-500 mt-20 mb-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-30 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:scale-110 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Lado da Imagem (Carrossel) */}
          <div className="lg:w-3/5 relative group overflow-hidden bg-black h-[400px] lg:h-auto">
            <img 
              key={currentItem.img}
              src={currentItem.img} 
              alt={currentItem.title} 
              className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000" 
            />
            
            {/* Controles do Carrossel */}
            {service.items.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold transition-all backdrop-blur-md opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold transition-all backdrop-blur-md opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-10 left-10 flex gap-3 z-20">
              {service.items.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-luxury-gold' : 'w-3 bg-white/20'}`} 
                />
              ))}
            </div>
          </div>
          
          {/* Lado do Conteúdo */}
          <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center space-y-10 bg-[#0A0A0A]">
            <div className="space-y-4">
              <span className="text-luxury-gold/50 text-xs font-mono uppercase tracking-[0.4em] font-semibold block">Portfólio Detalhado</span>
              <h3 key={currentItem.title} className="text-4xl lg:text-5xl lg:whitespace-nowrap font-serif italic text-white leading-[1.1] animate-in slide-in-from-left-4 duration-500">
                {currentItem.title}
              </h3>
            </div>
            
            <p key={currentItem.desc} className="text-white/40 font-light leading-relaxed text-lg italic font-serif animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
              "{currentItem.desc}"
            </p>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
              <div className="space-y-2">
                <span className="text-[10px] text-white/30 uppercase font-mono tracking-[0.2em]">Investimento</span>
                <div className="text-3xl font-sans font-black text-luxury-gold">{currentItem.price}</div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-white/30 uppercase font-mono tracking-[0.2em]">Duração Média</span>
                <div className="text-base font-semibold text-white/80">{currentItem.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    { 
      category: "Extensão de Cílios", 
      desc: "Trabalhos de excelência em fios.", 
      img: lashesImg, 
      price: "R$ 150",
      items: [
        { title: "Volume Brasileiro", desc: "É o mais naturalzinho. A ideia é só deixar seus cílios mais cheios e definidos, como se você já acordasse arrumada todos os dias, sem parecer exagerado. É o que mais indicamos para quem vai fazer pela primeira vez.", img: volumeBrasileiroImg, price: "R$ 150", duration: "90 - 120 min" },
        { title: "Volume Americano", desc: "Tem um efeito mais moderno, com movimento nos cílios. Fica bonito tanto no dia a dia quanto quando você se arruma mais.", img: volumeAmericanoImg, price: "R$ 170", duration: "100 - 130 min" },
        { title: "Fio a Fio Luxo", desc: "Clássico e atemporal, para quem busca naturalidade e elegância no olhar.", img: lashesImg, price: "R$ 130", duration: "90 min" }
      ]
    },
    { 
      category: "Micropigmentação", 
      desc: "Lábios e sobrancelhas definidos.", 
      img: lipsImg, 
      price: "R$ 450",
      items: [
        { title: "Aquarelle Lips", desc: "Cor e brilho labial com efeito 'tint', deixando os lábios com aspecto saudável.", img: lipsImg, price: "R$ 450", duration: "120 min" }
      ]
    },
    { 
      category: "Design de Sobrancelhas", 
      desc: "Moldura do rosto perfeita.", 
      img: browsImg, 
      price: "R$ 60",
      items: [
        { title: "Design Estratégico", desc: "Mapeamento facial completo para realçar seus pontos positivos.", img: browsImg, price: "R$ 60", duration: "40 min" }
      ]
    },
    { 
      category: "Nail Design", 
      desc: "Unhas impecáveis por semanas.", 
      img: nailsImg, 
      price: "R$ 120",
      items: [
        { title: "Alongamento em Fibra", desc: "Alta resistência e naturalidade máxima para suas unhas.", img: nailsImg, price: "R$ 120", duration: "120 min" }
      ]
    },
  ];

  return (
    <section id="servicos" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-7xl italic leading-none">Serviços <br/> <span className="text-luxury-gold not-italic font-black tracking-tighter uppercase">Especiais</span></h2>
            <p className="text-white/20 font-mono text-xs tracking-[0.4em] uppercase">Excelência que você sente</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => setSelectedService(s)}>
              <div className="h-[26rem] glass-card mb-8 overflow-hidden rounded-[2.5rem] border-white/5 relative bg-white/[0.02]">
                <img src={s.img} alt={s.category} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />
                
                <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center gap-4">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-luxury-gold block uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ver Portfólio</span>
                  <div className="w-14 h-14 rounded-full border border-luxury-gold/30 flex items-center justify-center backdrop-blur-md group-hover:bg-luxury-gold group-hover:border-transparent transition-all duration-500 scale-90 group-hover:scale-100">
                    <ArrowRight className="w-6 h-6 text-luxury-gold group-hover:text-white" />
                  </div>
                </div>
              </div>
              
              {/* Texto abaixo do card */}
              <div className="text-center space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl italic font-serif text-white/90 tracking-tight lowercase first-letter:uppercase">
                  {s.category}
                </h3>
                <div className="w-8 h-[1px] bg-luxury-gold/30 mx-auto group-hover:w-16 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal renderizado dentro da seção com posição absoluta */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
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

        <div className="glass-card p-12 bg-white flex flex-col justify-between text-luxury-black relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-luxury-gold/10 rounded-full blur-[80px]" />
          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-luxury-gold text-white px-3 py-1 rounded-full">Destaque do Mês</span>
            <h3 className="text-5xl font-serif italic">Spa Day <br/> Bella Beauty</h3>
            <p className="font-light opacity-80">Pacote completo com Cílios + Design de Unhas + Revitalização Facial com Nayara & Kelly.</p>
            <div className="text-6xl font-sans font-black text-luxury-gold">R$ 259,90</div>
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
    <main className="bg-vapor-night text-vapor-light perspective-1000 overflow-x-hidden relative">
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
