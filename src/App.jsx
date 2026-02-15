import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, ArrowRight, Play, Instagram, Send, Ship, Ghost, Menu, X, Monitor, Smartphone, Layers } from 'lucide-react';

// Asset Imports
import featuredProject from './assets/featured-project.jpeg';
import videoReel1 from './assets/video-reel-1.mp4';
import videoReel2 from './assets/video-reel-2.mp4';
import gallery1 from './assets/gallery-1.jpeg';
import gallery2 from './assets/gallery-2.jpeg';
import gallery3 from './assets/gallery-3.jpeg';
import gallery4 from './assets/gallery-4.jpeg';

const App = () => {
  const [theme, setTheme] = useState('sail'); // 'sail' (light) or 'shade' (dark)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);

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

  // Updated data with actual assets
  const creativeWork = [
    { id: 1, type: 'Reel', title: 'Urban Rhythm', category: 'Motion', media: videoReel1, isVideo: true },
    { id: 2, type: 'Post', title: 'Minimalist Void', category: 'Design', media: gallery1, isVideo: false },
    { id: 3, type: 'Reel', title: 'Golden Hour', category: 'Cinematic', media: videoReel2, isVideo: true },
    { id: 4, type: 'Post', title: 'Cyber Pulse', category: 'VFX', media: gallery2, isVideo: false },
    { id: 5, type: 'Post', title: 'Texture Study', category: 'Branding', media: gallery3, isVideo: false },
    { id: 6, type: 'Post', title: 'Liquid Flow', category: 'Motion', media: gallery4, isVideo: false },
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-700 ease-in-out font-sans ${isSail ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-50'
      }`}>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`p-2 rounded-full transition-transform duration-500 group-hover:rotate-180 ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-950'}`}>
            {isSail ? <Ship size={20} /> : <Ghost size={20} />}
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-white">Sail & Shade</span>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 transform active:scale-90 flex items-center gap-2 border ${isSail ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'
              }`}
          >
            {isSail ? <Moon size={18} /> : <Sun size={18} />}
            <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">
              Go {isSail ? 'Shade' : 'Sail'}
            </span>
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="text-white"><Menu /></button>
        </div>
      </nav>

      {/* --- FULLSCREEN MENU --- */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center transition-all duration-500 ${isSail ? 'bg-white' : 'bg-slate-950'}`}>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10"><X size={32} /></button>
          <div className="flex flex-col gap-8 text-center">
            {['Work', 'The Lab', 'Studio', 'Connect'].map((item) => (
              <a key={item} href="#" className="text-6xl font-black uppercase tracking-tighter hover:italic transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Animated background elements */}
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse ${isSail ? 'bg-blue-200' : 'bg-purple-900'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse delay-700 ${isSail ? 'bg-amber-100' : 'bg-blue-900'}`} />
        </div>

        <div className="z-10 text-center max-w-5xl">
          <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-6 reveal opacity-0 translate-y-10 transition-all duration-1000">
            {isSail ? 'Sail Through' : 'Shade The'} <br />
            <span className={isSail ? 'text-blue-600' : 'text-slate-500'}>
              {isSail ? 'The Noise' : 'Competition'}
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto opacity-70 mb-10 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            A boutique creative agency specializing in high-velocity visual content.
            We build atmospheres, not just assets.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500">
            <button className={`px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:pr-10 ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
              }`}>
              View Currents <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-50">
              <span>Scroll to explore</span>
              <div className={`w-12 h-[1px] ${isSail ? 'bg-slate-900' : 'bg-white'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* --- THE "ONE CLIENT" PREMIER SPOTLIGHT --- */}
      {/* We frame your one client as a "Featured Partnership" to make it feel significant */}
      <section className={`py-32 px-6 transition-all duration-1000 ${isSail ? 'bg-white' : 'bg-slate-900'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal opacity-0 translate-y-10 transition-all">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-50 mb-4 block">Premier Partnership</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Velocity <br />Digital Corp.</h2>
            </div>
            <p className="max-w-md opacity-60">
              A deep-dive transformation of a legacy brand into a digital-first titan. We handled everything from aesthetic strategy to daily motion output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 aspect-video rounded-3xl overflow-hidden relative group reveal opacity-0 translate-y-10 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Comprehensive Motion Campaign</h3>
                  <p className="opacity-70">12 High-Impact Reels + Identity Shift</p>
                </div>
              </div>
              <div className={`w-full h-full ${isSail ? 'bg-slate-200' : 'bg-slate-800'} relative`}>
                <img src={featuredProject} alt="Featured Partnership" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <Play size={48} className="text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              {[
                { icon: <Layers size={20} />, label: "Aesthetic Direction" },
                { icon: <Monitor size={20} />, label: "Digital Strategy" },
                { icon: <Smartphone size={20} />, label: "Social Momentum" }
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-3xl flex-1 flex flex-col justify-between reveal opacity-0 translate-y-10 transition-all delay-${(i + 1) * 200} ${isSail ? 'bg-slate-50 border border-slate-100' : 'bg-slate-800'
                  }`}>
                  <div className="p-3 rounded-xl bg-white/10 w-fit">{stat.icon}</div>
                  <span className="text-xl font-bold uppercase tracking-tighter">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CURRENTS (REELS/POSTS GALLERY) --- */}
      <section className="py-32">
        <div className="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Creative <br /> Currents
          </h2>
          <div className="flex gap-2">
            <button className={`p-4 rounded-full border ${isSail ? 'border-slate-200' : 'border-slate-800'}`}>
              <Instagram size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div
          className="flex gap-6 overflow-x-auto px-6 pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none' }}
        >
          {creativeWork.map((work) => (
            <div key={work.id} className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative rounded-[2rem] overflow-hidden group">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                {work.isVideo ? (
                  <video src={work.media} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={work.media} alt={work.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase text-white">
                {work.type}
              </div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-xs uppercase tracking-[0.3em] opacity-70 mb-2 block">{work.category}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">{work.title}</h3>
              </div>
            </div>
          ))}
          {/* CTA Card at the end */}
          <div className={`min-w-[300px] md:min-w-[450px] aspect-[4/5] rounded-[2rem] flex flex-col items-center justify-center text-center p-10 border-2 border-dashed ${isSail ? 'border-slate-200' : 'border-slate-800'
            }`}>
            <h3 className="text-2xl font-bold uppercase mb-4 italic">Your Brand Next?</h3>
            <button className={`px-6 py-3 rounded-full text-sm font-bold uppercase ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
              Let's talk
            </button>
          </div>
        </div>
      </section>

      {/* --- THE LAB (INTERNAL EXPERIMENTS) --- */}
      <section className={`py-32 px-6 ${isSail ? 'bg-blue-50' : 'bg-indigo-950/20'}`}>
        <div className="max-w-7xl mx-auto text-center mb-20 reveal opacity-0 translate-y-10 transition-all">
          <span className="text-xs font-bold uppercase tracking-[0.5em] opacity-50 mb-4 block">Internal S&S Lab</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">Always <br /> Creating</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            We don't wait for a brief to innovate. Our lab is where we push the boundaries of motion, AI integration, and visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className={`aspect-square rounded-2xl overflow-hidden reveal opacity-0 translate-y-10 transition-all delay-${i * 100} ${isSail ? 'bg-white' : 'bg-slate-800'
              }`}>
              <img
                src={[gallery1, gallery2, gallery3, gallery4, featuredProject, gallery1, gallery2, gallery3][i - 1]}
                alt="Lab Experiment"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT / FOOTER --- */}
      <footer className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              Catch <br /> The Wind.
            </h2>
            <div className="flex gap-4">
              <button className="p-5 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white transition-all text-slate-900">
                <Instagram />
              </button>
              <button className="p-5 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white transition-all text-slate-900">
                <Send />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email</label>
                <input
                  type="text"
                  placeholder="hello@yourbrand.com"
                  className={`w-full bg-transparent border-b-2 py-4 focus:outline-none focus:border-blue-500 transition-colors ${isSail ? 'border-slate-200' : 'border-slate-800'
                    }`}
                />
              </div>
              <button className={`w-full py-6 rounded-full font-black uppercase tracking-widest transition-all hover:scale-[1.02] ${isSail ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                }`}>
                Drop Anchor
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-200/20 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 Sail & Shade Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Press Kit</a>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Space Grotesk', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;