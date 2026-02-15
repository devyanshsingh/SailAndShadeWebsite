import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, ArrowRight, Play, Instagram, Send, Ship, Ghost, Menu, X, Monitor, Smartphone, Layers, Camera, BookOpen, Sparkles, Zap } from 'lucide-react';

// Local Asset Imports
import featuredProject from './assets/featured-project.jpeg';
import videoReel1 from './assets/video-reel-1.mp4';
import videoReel2 from './assets/video-reel-2.mp4';
import gallery1 from './assets/gallery-1.jpeg';
import gallery2 from './assets/gallery-2.jpeg';
import gallery3 from './assets/gallery-3.jpeg';
import gallery4 from './assets/gallery-4.jpeg';

const App = () => {
  const [theme, setTheme] = useState('shade'); // Defaults to 'shade' for that premium luxury look
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isExploring, setIsExploring] = useState(false);
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'sail' ? 'shade' : 'sail');
  };

  const isSail = theme === 'sail';

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleExplore = () => {
    setIsExploring(true);
    setTimeout(() => {
      const element = document.getElementById('spotlight');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Reset animation state after scroll starts
      setTimeout(() => setIsExploring(false), 1000);
    }, 800);
  };

  // Specific creative outputs for Calista using local assets
  const creativeWork = [
    {
      id: 1,
      type: 'Reel',
      title: 'The Dark Oud',
      category: 'Sensory Motion',
      media: videoReel1,
      isVideo: true,
      color: "bg-stone-900"
    },
    {
      id: 2,
      type: 'Brochure',
      title: 'Tactile Heritage',
      category: 'Print Design',
      media: gallery1,
      isVideo: false,
      color: "bg-slate-200"
    },
    {
      id: 3,
      type: 'Reel',
      title: 'Floral Bloom',
      category: 'Light Scent',
      media: videoReel2,
      isVideo: true,
      color: "bg-blue-100"
    },
    {
      id: 4,
      type: 'Photography',
      title: 'Vessel Study',
      category: 'Product Focus',
      media: gallery2,
      isVideo: false,
      color: "bg-neutral-800"
    },
    {
      id: 5,
      type: 'Story',
      title: 'Behind The Scent',
      category: 'Engagement',
      media: gallery3,
      isVideo: false,
      color: "bg-stone-100"
    },
    {
      id: 6,
      type: 'Reel',
      title: 'Golden Hour',
      category: 'Atmosphere',
      media: gallery4,
      isVideo: false,
      color: "bg-amber-900"
    },
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-1000 ease-in-out font-sans ${isSail ? 'bg-slate-50 text-slate-900' : 'bg-[#050505] text-slate-50'
      }`}>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center bg-transparent">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`p-2.5 rounded-xl transition-all duration-500 group-hover:rotate-12 ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-950'}`}>
            {isSail ? <Ship size={20} /> : <Ghost size={20} />}
          </div>
          <span className={`text-xl font-black tracking-tighter uppercase ${isSail ? 'text-slate-900' : 'text-white'}`}>Sail & Shade</span>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={toggleTheme} className={`px-5 py-2.5 rounded-full transition-all duration-300 transform active:scale-95 flex items-center gap-2 border ${isSail ? 'bg-white border-slate-200 shadow-sm text-slate-900' : 'bg-slate-900 border-slate-800 text-white'}`}>
            {isSail ? <Moon size={16} /> : <Sun size={16} />}
            <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">
              {isSail ? 'Shade Mode' : 'Sail Mode'}
            </span>
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-2.5 rounded-xl transition-all duration-300 ${isSail ? 'bg-slate-900 text-white' : 'text-white hover:bg-white/10'}`}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- MENU --- */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center transition-all duration-500 ${isSail ? 'bg-white text-slate-900' : 'bg-slate-950 text-white'}`}>
          <button onClick={() => setIsMenuOpen(false)} className={`absolute top-10 right-10 p-4 ${isSail ? 'text-slate-900' : 'text-white'}`}><X size={32} /></button>
          <div className="flex flex-col gap-8 text-center uppercase">
            {[
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Connect', id: 'connect' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-7xl font-black tracking-tighter hover:italic transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* --- HERO --- */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse ${isSail ? 'bg-blue-300' : 'bg-purple-900'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse delay-700 ${isSail ? 'bg-amber-100' : 'bg-indigo-900'}`} />
        </div>

        <div className="z-10 text-center max-w-6xl">
          <h1 className="text-[13vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase mb-8 reveal opacity-0 translate-y-10 transition-all duration-1000">
            {isSail ? 'Sail Through' : 'Shade'} <br />
            <span className={isSail ? 'text-blue-600' : 'text-slate-500'}>
              {isSail ? 'The Noise' : 'The Competition'}
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-60 mb-12 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 leading-relaxed">
            We bridge the gap between high-velocity social motion and tangible luxury design. Creative partners for brands that demand depth.
          </p>
          <button
            onClick={handleExplore}
            className={`px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all duration-700 ease-in-out reveal opacity-0 translate-y-10 delay-500 hover:gap-8 ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${isExploring ? 'translate-x-[120vw] opacity-0' : ''}`}
          >
            Explore Work <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* --- SIGNATURE PARTNERSHIP: CALISTA LUXURY --- */}
      <section id="spotlight" className={`py-48 px-6 transition-all duration-1000 relative z-10 ${isSail ? 'bg-white border-y border-slate-100' : 'bg-slate-900'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32 reveal opacity-0 translate-y-10 transition-all">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-6 block italic">Premier Agency Residency</span>
              <h2 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-none">
                Calista <br /> Luxury.
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed border-l-2 border-current pl-10">
                Daily momentum for a prestige fragrance house. From moody Oud profiles to ethereal fresh florals, we translate olfactory excellence into visual dominance across reels, photography, and tactile print.
              </p>
              <div className="flex flex-wrap gap-4 pl-10">
                {['Daily Growth Reels', 'Product Photography', 'Brochure Design', 'Stories Strategy'].map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-4 py-1.5 border border-current opacity-30 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Spotlight Content - Vertical Reel View */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 reveal opacity-0 translate-y-10 transition-all">
              <div className="aspect-[9/16] rounded-[3rem] overflow-hidden relative group">
                <video
                  src={videoReel1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">Immersive <br /> Motion</h3>
                </div>
              </div>

              <div className="aspect-[9/16] rounded-[3rem] overflow-hidden relative group">
                <video
                  src={videoReel2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">High Velocity</h3>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {[
                { icon: <Zap size={20} />, title: "Daily Growth", desc: "Constant Instagram momentum with high-end reels." },
                { icon: <Camera size={20} />, title: "Visual Scent", desc: "Photography capturing the essence of dual fragrance profiles." },
                { icon: <BookOpen size={20} />, title: "Tactile Print", desc: "Premium brochure design for the physical experience." }
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] flex-1 flex flex-col justify-between transition-all hover:-translate-y-2 reveal opacity-0 translate-y-10 delay-${(i + 1) * 200} ${isSail ? 'bg-slate-50 border border-slate-100' : 'bg-slate-800'
                  }`}>
                  <div className={`p-4 rounded-2xl w-fit mb-6 ${isSail ? 'bg-white text-slate-900 shadow-sm' : 'bg-slate-700 text-white'}`}>{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                    <p className="text-[10px] opacity-40 font-bold uppercase tracking-[0.2em] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK GALLERY --- */}
      <section id="portfolio" className="py-48">
        <div className="px-8 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end max-w-7xl mx-auto gap-8">
          <div>
            <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6 reveal opacity-0 translate-y-10">
              Creative <br /> Currents
            </h2>
            <p className="opacity-40 text-xs font-black uppercase tracking-[0.5em] reveal opacity-0 translate-y-10 delay-200">A curation of Reels, Posts, and Print</p>
          </div>
          <div className={`p-6 rounded-full border reveal opacity-0 translate-y-10 delay-400 ${isSail ? 'border-slate-200' : 'border-slate-800'}`}>
            <Instagram size={28} />
          </div>
        </div>

        <div className="flex gap-10 overflow-x-auto px-8 pb-12 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {creativeWork.map((work) => (
            <div key={work.id} className="min-w-[340px] md:min-w-[550px] aspect-[4/5] relative rounded-[3.5rem] overflow-hidden group">
              <div className={`absolute inset-0 ${work.color} transition-transform duration-1000 group-hover:scale-110 opacity-70`} />
              {work.isVideo ? (
                <video src={work.media} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90" />
              ) : (
                <img src={work.media} alt={work.title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
              )}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="absolute top-12 left-12 px-6 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                {work.type}
              </div>
              <div className="absolute bottom-12 left-12 text-white">
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-60 mb-3 block font-bold">{work.category}</span>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{work.title}</h3>
              </div>
            </div>
          ))}
          <div className={`min-w-[340px] md:min-w-[550px] aspect-[4/5] rounded-[3.5rem] flex flex-col items-center justify-center text-center p-16 border-2 border-dashed ${isSail ? 'border-slate-200' : 'border-slate-800'
            }`}>
            <h4 className="text-4xl font-black uppercase mb-10 italic opacity-20">The Next <br /> Horizon</h4>
            <button className={`px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
              Inquire Within
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="connect" className={`py-48 px-10 relative z-10 ${isSail ? 'bg-slate-100' : 'bg-[#0a0a0a]'}`}>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-8xl md:text-[14vw] font-black uppercase tracking-tighter leading-none mb-32 reveal opacity-0 translate-y-10">
            Set <br /> Sail.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full pt-24 border-t border-current/10">
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-8 block italic">Contact Studio</span>
              <p className="text-2xl font-bold tracking-tight">sailnshade@gmail.com</p>
            </div>
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-8 block italic">Social Channels</span>
              <div className="flex gap-10">
                <a href="https://www.instagram.com/sailandshade/" className="text-lg font-bold hover:italic transition-all uppercase tracking-tighter">Instagram</a>
              </div>
            </div>
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-8 block italic">Status</span>
              <p className="text-lg font-bold opacity-60 tracking-tight">Open for Select 2024 Residencies</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0;
          padding: 0;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default App;