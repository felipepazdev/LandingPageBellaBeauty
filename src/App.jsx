import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
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
  ChevronRight,
  BookOpen,
  GraduationCap,
  Award,
  Users
} from 'lucide-react';

// Ativos Originais
import lashesImg from './assets/lashes.png';
import lipsImg from './assets/lips.png';
import browsImg from './assets/brows.png';
import nailsImg from './assets/nails.png';
import volumeBrasileiroImg from './assets/volume-brasileiro.png';
import volumeAmericanoImg from './assets/volume-americano.png';
import foxEyesImg from './assets/fox-eyes.png';
import lashLiftingImg from './assets/lash-lifting.png';
import microSobrancelhaImg from './assets/micro-sobrancelha.png';
import designHennaImg from './assets/design-henna.png';
import salaoRealImg from './assets/salao-real.jpg';
import kellyImg from './assets/kelly.png';
import nayaraImg from './assets/nayara.png';

gsap.registerPlugin(ScrollTrigger);

const WZ_URL = "http://wa.me/5521975683691";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'bg-vapor-night/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-luxury-gold flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(197,160,40,0.3)]">
            <Crown className="w-5 h-5 text-luxury-black" />
          </div>
          <span className="font-serif italic text-2xl tracking-tighter text-white uppercase">Bella Beauty</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono tracking-[0.2em] text-vapor-light/60">
          <Link to="/" className="hover:text-vapor-accent transition-colors uppercase">Início</Link>
          {isHome ? (
            <>
              <a href="#servicos" className="hover:text-vapor-accent transition-colors">SERVIÇOS</a>
              <a href="#precos" className="hover:text-vapor-accent transition-colors">TABELA</a>
              <a href="#especialistas" className="hover:text-vapor-accent transition-colors">EQUIPE</a>
            </>
          ) : (
            <Link to="/#servicos" className="hover:text-vapor-accent transition-colors">SERVIÇOS</Link>
          )}
          <Link to="/curso" className="hover:text-vapor-accent transition-colors font-bold text-luxury-gold">CURSO</Link>
          <a href="#contato" className="hover:text-vapor-accent transition-colors">CONTATO</a>
        </div>

        <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="bg-vapor-accent/10 border border-vapor-accent/30 text-vapor-accent px-6 py-2.5 rounded-full text-xs font-bold hover:bg-vapor-accent hover:text-white transition-all duration-300">
          AGENDAR AGORA
        </a>
      </div>
    </nav>
  );
};

// Seções Reutilizáveis
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', service: '', whatsapp: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá Bella Beauty! Me chamo ${formData.name}. Gostaria de uma avaliação sobre ${formData.service}. Meu WhatsApp para contato é ${formData.whatsapp}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5521975683691?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

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
                <p className="text-lg font-light">+55 (21) 97568-3691</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 bg-vapor-night/50 border-white/5 space-y-8 min-h-[400px] flex flex-col justify-center">
           {!isSubmitted ? (
             <>
               <h3 className="text-2xl font-serif italic">Dúvidas ou Pré-Avaliação?</h3>
               <p className="text-sm text-white/40 font-light">Mande uma mensagem e nossa equipe retornará em instantes.</p>
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu Nome" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-vapor-accent transition-colors text-sm" 
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="WhatsApp (Ex: 21 99999-9999)" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-vapor-accent transition-colors text-sm" 
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="Serviço de Interesse" 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-vapor-accent transition-colors text-sm" 
                  />
                  <button type="submit" className="w-full btn-primary justify-center py-6 text-sm uppercase tracking-widest group">
                    Enviar Mensagem
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
             </>
           ) : (
             <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-vapor-accent/20 rounded-full flex items-center justify-center mx-auto border border-vapor-accent/30">
                  <CheckCircle2 className="w-10 h-10 text-vapor-accent animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif italic text-white">Mensagem Enviada!</h3>
                  <p className="text-vapor-light/40 leading-relaxed">
                    Mensagem enviada com sucesso para nossa equipe através do WhatsApp. <br/> 
                    <span className="text-vapor-accent font-medium">Em breve entraremos em contato.</span>
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-white/20 uppercase tracking-widest hover:text-vapor-accent transition-colors"
                >
                  Enviar outra mensagem
                </button>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

const ContactCourse = () => {
  const [formData, setFormData] = useState({ name: '', interest: '', whatsapp: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá Bella Beauty! Me chamo ${formData.name}. Tenho interesse no Curso e gostaria de saber mais sobre a modalidade ${formData.interest}. Meu WhatsApp: ${formData.whatsapp}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5521975683691?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="py-32 px-8 bg-black relative overflow-hidden">
       <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <BookOpen className="w-[800px] h-[800px] text-luxury-gold absolute top-[-200px] right-[-200px]" />
       </div>

      <div className="max-w-7xl mx-auto relative z-10 glass-card p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 border-luxury-gold/10">
        <div className="space-y-12">
          <h2 className="text-6xl italic leading-tight uppercase text-white">Comece sua <br/> <span className="text-luxury-gold font-black not-italic">Carreira de Sucesso</span></h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-luxury-gold" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 block mb-1 uppercase tracking-widest">Aceleração</span>
                <p className="text-lg font-light text-white/80">Recuperação do investimento <br/> <span className="text-sm opacity-40 tracking-tight italic">em média nos primeiros 30 dias de atuação.</span></p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-luxury-gold" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 block mb-1 uppercase tracking-widest">Suporte Individual</span>
                <p className="text-lg font-light text-white/80">Mentoria Direta <br/> <span className="text-sm opacity-40 tracking-tight italic">Tire todas as suas dúvidas diretamente com a Nayara.</span></p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-luxury-gold" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 block mb-1 uppercase tracking-widest">Certificado</span>
                <p className="text-lg font-light text-white/80">Acesso ao Mercado <br/> <span className="text-sm opacity-40 tracking-tight italic">Certificação reconhecida em todo o território nacional.</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-8 min-h-[400px] flex flex-col justify-center">
           {!isSubmitted ? (
             <>
               <h3 className="text-2xl font-serif italic text-white">Dúvida sobre o Curso?</h3>
               <p className="text-sm text-white/40 font-light">Preencha os dados e nossa consultoria pedagógica entrará em contato.</p>
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu Nome" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-luxury-gold transition-colors text-sm text-white" 
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="Seu WhatsApp" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-luxury-gold transition-colors text-sm text-white" 
                  />
                  <select 
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-luxury-gold transition-colors text-sm text-white/60 appearance-none bg-black"
                  >
                    <option value="" disabled className="text-white/40">Qual modalidade você prefere?</option>
                    <option value="Presencial" className="text-white bg-black">Curso Presencial (Saquarema)</option>
                    <option value="Online" className="text-white bg-black">Curso Online (Acesso Vitalício)</option>
                  </select>
                  <button type="submit" className="w-full btn-primary bg-luxury-gold text-black border-none justify-center py-6 text-sm uppercase tracking-widest group hover:bg-white hover:text-black transition-all">
                    Quero saber mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
             </>
           ) : (
             <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto border border-luxury-gold/30">
                  <CheckCircle2 className="w-10 h-10 text-luxury-gold animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif italic text-white">Interesse Registrado!</h3>
                  <p className="text-white/40 leading-relaxed">
                    Sua solicitação de informações foi enviada com sucesso. <br/> 
                    <span className="text-luxury-gold font-medium">Em breve nossa equipe pedagógica falará com você.</span>
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-white/20 uppercase tracking-widest hover:text-luxury-gold transition-colors"
                >
                  Fazer nova pergunta
                </button>
             </div>
           )}
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
           <Link to="/" className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-vapor-accent" />
            <span className="font-serif italic text-3xl text-white uppercase tracking-tighter">Bella Beauty</span>
          </Link>
          <p className="text-sm text-vapor-light/30 max-w-xs font-light tracking-wide">
            Transformando o autocuidado em Saquarema através da fusão entre arte clássica e tecnologia estética.
          </p>
        </div>
        
        <div className="flex gap-20">
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-vapor-accent uppercase tracking-[0.3em]">Navegação</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li><Link to="/" className="hover:text-vapor-accent transition-all">Inicio</Link></li>
              <li><a href="#servicos" className="hover:text-vapor-accent transition-all">Tratamentos</a></li>
              <li><Link to="/curso" className="hover:text-vapor-accent transition-all">Curso de Cílios</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-vapor-accent uppercase tracking-[0.3em]">Links</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li>
                <a href="https://www.instagram.com/bellabeauty.saquarema/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-vapor-accent transition-all">
                  <Camera className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li><a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-vapor-accent"><PhoneCall className="w-4 h-4" /> WhatsApp</a></li>
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

// Componentes da Home
const HeroHome = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" });
      gsap.to(".hero-image", { y: -50, scrollTrigger: { trigger: containerRef.current, scrub: true } });
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
            <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="btn-primary uppercase text-xs tracking-widest">
              Agendar Agora
              <ArrowRight className="w-4 h-4" />
            </a>
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

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    { 
      category: "Extensão de Cílios", 
      desc: "Trabalhos de excelência em fios.", 
      img: lashesImg, 
      price: "R$ 150",
      items: [
        { title: "Volume Brasileiro", desc: "É o mais naturalzinho. A ideia é só deixar seus cílios mais cheios e definidos, como se você já acordasse arrumada todos os dias, sem parecer exagerado.", img: volumeBrasileiroImg, price: "R$ 150", duration: "90 - 120 min" },
        { title: "Volume Americano", desc: "Tem um efeito mais moderno, com movimento nos cílios.", img: volumeAmericanoImg, price: "R$ 170", duration: "100 - 130 min" },
        { title: "Fox Eyes", desc: "Deixa o olhar mais alongado e levantado.", img: foxEyesImg, price: "R$ 180", duration: "100 - 130 min" },
        { title: "Lash Lifting", desc: "Levanta e curva os cílios naturais desde a raiz.", img: lashLiftingImg, price: "R$ 110", duration: "60 - 80 min" }
      ]
    },
    { category: "Micropigmentação", desc: "Lábios e sobrancelhas definidos.", img: lipsImg, price: "R$ 450", items: [{ title: "Micro de Sobrancelha", desc: "Desenha as sobrancelhas com pigmento na pele.", img: microSobrancelhaImg, price: "R$ 450", duration: "120 min" }] },
    { category: "Design de Sobrancelhas", desc: "Moldura do rosto perfeita.", img: browsImg, price: "R$ 60", items: [{ title: "Design com Henna", desc: "Modela os fios e preenche falhas.", img: designHennaImg, price: "R$ 80", duration: "50 min" }] },
    { category: "Nail Design", desc: "Unhas impecáveis por semanas.", img: nailsImg, price: "R$ 120", items: [{ title: "Alongamento em Fibra", desc: "Alta resistência e unhas impecáveis.", img: nailsImg, price: "R$ 120", duration: "120 min" }] },
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
                  <div className="w-14 h-14 rounded-full border border-luxury-gold/30 flex items-center justify-center backdrop-blur-md group-hover:bg-luxury-gold group-hover:border-transparent transition-all duration-500 scale-90 group-hover:scale-100">
                    <ArrowRight className="w-6 h-6 text-luxury-gold group-hover:text-white" />
                  </div>
                </div>
              </div>
              <div className="text-center space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl italic font-serif text-white/90 tracking-tight lowercase first-letter:uppercase">{s.category}</h3>
                <div className="w-8 h-[1px] bg-luxury-gold/30 mx-auto group-hover:w-16 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};

const ServiceModal = ({ service, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!service) return null;
  const currentItem = service.items[currentIndex];
  return (
    <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl pointer-events-auto" onClick={onClose}>
      <div className="bg-[#0A0A0A] border border-luxury-gold/20 w-full max-w-5xl rounded-[3rem] overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.8)]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-8 right-8 z-30 w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold transition-all"><X className="w-6 h-6" /></button>
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-3/5 relative bg-black h-[400px] lg:h-auto">
            <img src={currentItem.img} alt={currentItem.title} className="w-full h-full object-cover" />
            {service.items.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                <button onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => (prev - 1 + service.items.length) % service.items.length) }} className="pointer-events-auto w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold transition-all backdrop-blur-md"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => (prev + 1) % service.items.length) }} className="pointer-events-auto w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold transition-all backdrop-blur-md"><ChevronRight className="w-6 h-6" /></button>
              </div>
            )}
          </div>
          <div className="lg:w-2/5 p-10 flex flex-col justify-center space-y-8 bg-[#0A0A0A]">
            <h3 className="text-4xl font-serif italic text-white leading-tight">{currentItem.title}</h3>
            <p className="text-white/40 font-light leading-relaxed text-lg">"{currentItem.desc}"</p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div><span className="text-[10px] text-white/30 uppercase font-mono block">Investimento</span><div className="text-3xl font-black text-luxury-gold">{currentItem.price}</div></div>
              <div><span className="text-[10px] text-white/30 uppercase font-mono block">Duração</span><div className="text-base text-white/80">{currentItem.duration}</div></div>
            </div>
            <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">Quero este serviço</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingTable = () => {
  return (
    <section id="precos" className="py-32 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-5xl italic">Tabela de <br/> <span className="text-vapor-accent not-italic font-bold">Investimento</span></h2>
          <p className="text-vapor-light/40 leading-relaxed font-light italic">Valores base para os procedimentos principais.</p>
          <div className="space-y-4">
            {[{ n: "Extensão Classica", p: "R$ 130" }, { n: "Volume Híbrido", p: "R$ 160" }, { n: "Retoque (15 dias)", p: "R$ 80" }].map(item => (
              <div key={item.n} className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-vapor-accent/50 transition-colors">
                <span className="text-vapor-light/60 group-hover:text-white transition-colors uppercase font-mono text-xs">{item.n}</span>
                <span className="text-vapor-accent font-bold">{item.p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-12 bg-white flex flex-col justify-between text-luxury-black relative overflow-hidden group">
          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-luxury-gold text-white px-3 py-1 rounded-full text-center">Destaque do Mês</span>
            <h3 className="text-5xl font-serif italic text-luxury-black">Spa Day <br/> Bella Beauty</h3>
            <p className="font-light opacity-80 text-luxury-black/60">Pacote completo com Cílios + Design de Unhas + Revitalização Facial.</p>
            <div className="text-6xl font-sans font-black text-luxury-gold">R$ 259,90</div>
          </div>
          <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="relative z-10 mt-12 w-full bg-luxury-black text-white py-5 rounded-full font-bold hover:bg-vapor-accent transition-colors flex items-center justify-center gap-3 group/btn uppercase text-xs tracking-widest">
            GARANTIR MINHA VAGA
            <Zap className="w-4 h-4 fill-current group-hover/btn:scale-125 transition-transform" />
          </a>
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
            { n: "Kelly", r: "Senior Nail Designer", desc: "Especialista em alongamentos e blindagem de alto padrão.", img: kellyImg }
          ].map((e, i) => (
            <div key={i} className="glass-card flex flex-col md:flex-row p-8 gap-8 items-center hover:border-vapor-accent/30 transition-all group">
              <div className="w-40 h-40 rounded-full bg-vapor-accent/20 border border-white/5 relative overflow-hidden flex-shrink-0">
                <img src={e.img} alt={e.n} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <span className="text-[10px] font-mono text-vapor-accent tracking-[0.3em] uppercase">{e.r}</span>
                <h3 className="text-4xl italic text-white">{e.n}</h3>
                <p className="text-sm text-vapor-light/40 font-light leading-relaxed">{e.desc}</p>
                <div className="flex justify-center md:justify-start gap-4 pt-2">
                   <a href="https://www.instagram.com/bellabeauty.saquarema/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-vapor-accent transition-colors">
                     <Camera className="w-5 h-5" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Página de Curso
const CoursePage = () => {
  const containerRef = useRef(null);
  const [courseType, setCourseType] = useState('presencial'); // 'presencial' ou 'online'
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-hero > *", { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const price = courseType === 'presencial' ? '1.290' : '903';

  return (
    <div ref={containerRef} className="pt-20">
      <section className="course-hero py-32 px-8 min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/lashes.png')] bg-cover bg-center grayscale opacity-10" />
        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-[10px] font-mono uppercase tracking-widest">
            Formação Profissional
          </div>
          <h1 className="text-7xl md:text-9xl leading-[0.9] font-serif italic text-white uppercase tracking-tighter">
            Curso de <span className="text-luxury-gold not-italic font-sans font-black">Cílios</span>
          </h1>
          <p className="text-xl text-vapor-light/50 max-w-2xl mx-auto font-light leading-relaxed">
            Domine a arte da extensão de cílios com o método Bella Beauty. Do zero ao profissional com prática real ou no conforto da sua casa.
          </p>
          
          {/* Seletor de Modalidade */}
          <div className="flex justify-center pt-4">
            <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex items-center gap-2">
              <button 
                onClick={() => setCourseType('presencial')}
                className={`px-8 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-500 ${courseType === 'presencial' ? 'bg-luxury-gold text-luxury-black font-bold shadow-lg shadow-luxury-gold/20' : 'text-white/40 hover:text-white'}`}
              >
                Presencial
              </button>
              <button 
                onClick={() => setCourseType('online')}
                className={`px-8 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-500 ${courseType === 'online' ? 'bg-luxury-gold text-luxury-black font-bold shadow-lg shadow-luxury-gold/20' : 'text-white/40 hover:text-white'}`}
              >
                Online
              </button>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="btn-primary uppercase text-xs tracking-widest px-12 py-6">
              Quero me inscrever agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <BookOpen className="w-8 h-8"/>, title: "Teoria Avançada", desc: "Ciclo biológico, química de adesivos e saúde ocular." },
            { icon: <Zap className="w-8 h-8"/>, title: "Método Exclusivo", desc: "Técnicas de agilidade e retenção prolongada." },
            { icon: <Users className="w-8 h-8"/>, title: courseType === 'presencial' ? "Aulas Práticas" : "Aulas Gravadas HD", desc: courseType === 'presencial' ? "Prática em modelos reais com supervisão direta." : "Acesso vitalício ao conteúdo em alta definição." },
            { icon: <Award className="w-8 h-8"/>, title: "Certificação", desc: "Certificado reconhecido para atuar no mercado." },
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 space-y-6 hover:border-luxury-gold/40 transition-all group">
              <div className="text-luxury-gold group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-2xl italic">{item.title}</h3>
              <p className="text-sm text-vapor-light/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-square rounded-cinema overflow-hidden glass-card">
            <img src={nayaraImg} alt="Instrutora Nayara" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
             <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest">Sua Mentora</span>
             <h2 className="text-6xl italic">Nayara <span className="text-white not-italic font-black">Lash Designer</span></h2>
             <p className="text-vapor-light/60 font-light leading-relaxed">
               Com mais de 5 anos de experiência e centenas de atendimentos realizados, Nayara desenvolveu um método que une rapidez e qualidade extrema. Você vai aprender os segredos que não estão nos livros de técnica básica.
             </p>
             <ul className="space-y-4">
               {["Técnica de Isolamento Perfeita", "Mapeamento Facial Customizado", "Marketing para Lash Designers", "Suporte Pós-Curso Vitalício"].map(t => (
                 <li key={t} className="flex items-center gap-3 text-sm italic"><CheckCircle2 className="w-5 h-5 text-luxury-gold"/> {t}</li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-black relative">
        <div className="absolute inset-0 bg-luxury-gold/5 opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-4">
             <span className="text-luxury-gold font-mono text-xs uppercase tracking-[0.4em] animate-pulse">Inicie sua Jornada</span>
             <h2 className="text-6xl md:text-8xl italic font-serif leading-none uppercase">Transforme sua <br/> <span className="text-luxury-gold not-italic font-black">Carreira Hoje</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
            <div className="glass-card bg-white/[0.03] border-white/10 p-12 rounded-cinema space-y-6 hover:border-luxury-gold/40 transition-all group text-center flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 group-hover:text-luxury-gold transition-colors">Modalidade Presencial</span>
                <div className="space-y-2">
                  <div className="text-7xl font-sans font-black tracking-tighter text-white">R$ 1.290</div>
                  <div className="text-[10px] text-luxury-gold font-mono tracking-[0.2em] font-bold">EM ATÉ 6X SEM JUROS</div>
                </div>
                <p className="text-sm italic text-white/40 font-serif lowercase first-letter:uppercase leading-relaxed">Mentoria presencial individual ou em grupo <br/> com prática direta em modelos reais.</p>
              </div>
              <div className="pt-10">
                 <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="w-full btn-primary justify-center text-[10px] uppercase tracking-widest py-6 shadow-2xl shadow-luxury-gold/20">
                    Garantir Presencial
                 </a>
              </div>
            </div>

            <div className="glass-card bg-white/[0.03] border-white/10 p-12 rounded-cinema space-y-6 hover:border-luxury-gold/40 transition-all group text-center flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 group-hover:text-luxury-gold transition-colors">Modalidade Online</span>
                <div className="space-y-2">
                  <div className="text-7xl font-sans font-black tracking-tighter text-white">R$ 903</div>
                  <div className="text-[10px] text-luxury-gold font-mono tracking-[0.2em] font-bold">EM ATÉ 6X SEM JUROS</div>
                </div>
                <p className="text-sm italic text-white/40 font-serif lowercase first-letter:uppercase leading-relaxed">Formação completa em vídeo HD com <br/> acesso vitalício e suporte via WhatsApp.</p>
              </div>
              <div className="pt-10">
                 <a href={WZ_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-white/10 text-white border border-white/20 p-6 rounded-full font-bold hover:bg-white hover:text-black transition-all text-[10px] uppercase tracking-widest">
                    Garantir Online
                 </a>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-8 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold shadow-lg shadow-luxury-gold/5 animate-pulse">
              <Award className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">Certificado Profissional Incluso</span>
            </div>
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">Condições especiais válidas em todos os cartões de crédito</p>
          </div>
        </div>
      </section>
      <ContactCourse />
    </div>
  );
};

const HomePage = () => (
  <>
    <HeroHome />
    <BannerTrust />
    <ServiceSection />
    <PricingTable />
    <Specialists />
    <Contact />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="bg-vapor-night text-vapor-light perspective-1000 overflow-x-hidden relative min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curso" element={<CoursePage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}
