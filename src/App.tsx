import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Gamepad2, 
  Settings, 
  Globe, 
  ExternalLink, 
  Shield, 
  Zap, 
  Cpu,
  ArrowRight,
  Terminal,
  Github,
  MessageSquare,
  Info,
  Download,
  Upload,
  User,
  X,
  Menu,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GAMES, type Game } from './data/games';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'games' | 'settings' | 'zone'>('games');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = GAMES.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAboutBlank = () => {
    const win = window.open();
    if (!win) return;
    const url = window.location.href;
    const iframe = win.document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    window.location.replace('https://google.com');
  };

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex font-sans selection:bg-neon-emerald/30 selection:text-neon-emerald overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-72' : 'w-0 md:w-20'
        } transition-all duration-300 bg-[#0f0f0f] border-r border-white/5 flex flex-col z-50 relative`}
      >
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="w-8 h-8 bg-neon-emerald/20 rounded-lg flex items-center justify-center border border-neon-emerald/30">
            <Cpu className="w-5 h-5 text-neon-emerald" />
          </div>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <h1 className="text-lg font-bold tracking-tighter text-neon-emerald uppercase">GN-MATH</h1>
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">v2.0 • breadbb</p>
            </motion.div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8 custom-scrollbar">
          {/* Main Nav */}
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('games')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'games' 
                  ? 'bg-neon-emerald/10 text-neon-emerald border border-neon-emerald/20' 
                  : 'text-zinc-400 hover:bg-white/5'
              }`}
            >
              <Gamepad2 className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Games</span>}
            </button>
            <button
              onClick={() => setActiveTab('zone')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'zone' 
                  ? 'bg-neon-emerald/10 text-neon-emerald border border-neon-emerald/20' 
                  : 'text-zinc-400 hover:bg-white/5'
              }`}
            >
              <Zap className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Zone</span>}
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'settings' 
                  ? 'bg-neon-emerald/10 text-neon-emerald border border-neon-emerald/20' 
                  : 'text-zinc-400 hover:bg-white/5'
              }`}
            >
              <Settings className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Settings</span>}
            </button>
          </div>

          {isSidebarOpen && (
            <>
              {/* Community */}
              <div className="space-y-3">
                <h3 className="px-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Community</h3>
                <div className="space-y-1">
                  <a href="https://discord.gg/NAFw4ykZ7n" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>Discord Server</span>
                  </a>
                  <a href="https://github.com/gn-math" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span>GitHub Org</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <User className="w-4 h-4" />
                    <span>Community Hub</span>
                  </a>
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-3">
                <h3 className="px-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Tools</h3>
                <div className="space-y-1">
                  <button onClick={handleAboutBlank} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors text-left">
                    <Shield className="w-4 h-4" />
                    <span>About:Blank Cloak</span>
                  </button>
                  <button onClick={() => setActiveTab('settings')} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors text-left">
                    <Download className="w-4 h-4" />
                    <span>Save Manager</span>
                  </button>
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-3">
                <h3 className="px-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Legal</h3>
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors text-left">
                    <Shield className="w-4 h-4" />
                    <span>DMCA</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors text-left">
                    <Info className="w-4 h-4" />
                    <span>Privacy Policy</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-500"
          >
            {isSidebarOpen ? <ArrowRight className="w-4 h-4 rotate-180" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-neon-emerald transition-colors" />
              <input 
                type="text"
                placeholder="Search simulations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-neon-emerald/50 focus:border-neon-emerald transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-emerald/10 border border-neon-emerald/20 text-[10px] font-mono text-neon-emerald uppercase tracking-widest">
              <Zap className="w-3 h-3 fill-neon-emerald" />
              Engine Active
            </div>
            <button 
              onClick={handleAboutBlank}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-400 hover:text-white"
              title="About:Blank Cloak"
            >
              <Shield className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {activeTab === 'games' && (
            <div className="space-y-12">
              {/* Hero Banner */}
              <section className="relative rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[3/1] group">
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200&h=400" 
                  alt="Hero"
                  className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex flex-col justify-center px-12 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-emerald/20 border border-neon-emerald/30 text-[10px] font-mono text-neon-emerald uppercase tracking-widest w-fit">
                    Featured Simulation
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">UNLEASH THE <br /><span className="text-neon-emerald">SIMULATION</span></h2>
                  <p className="text-zinc-400 max-w-md text-sm font-light">Experience high-performance unblocked gaming with GN-Math's optimized engine.</p>
                </div>
              </section>

              {/* Partners Section */}
              <section className="space-y-6">
                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest text-center">Network Partners</h3>
                <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {['Simulation Hub', 'Neon Games', 'Emerald Network', 'Vortex Simulations'].map((partner) => (
                    <div key={partner} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon-emerald" />
                      <span className="text-sm font-bold tracking-tighter uppercase">{partner}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Games Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-neon-emerald" />
                    Simulation Library
                  </h3>
                  <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                    {filteredGames.length} Results
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGames.map((game, i) => (
                    <motion.div
                      key={game.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02 }}
                      onClick={() => handleGameClick(game)}
                      className="group relative bg-[#151515] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-neon-emerald/30 transition-all"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={game.thumbnail} 
                          alt={game.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-8 h-8 bg-neon-emerald rounded-full flex items-center justify-center text-black shadow-lg">
                            <Zap className="w-4 h-4 fill-black" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-neon-emerald uppercase tracking-widest">{game.category}</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-emerald animate-pulse" />
                        </div>
                        <h4 className="text-base font-bold group-hover:text-neon-emerald transition-colors truncate">{game.title}</h4>
                        <p className="text-xs text-zinc-500 line-clamp-2 font-light leading-relaxed">{game.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredGames.length === 0 && (
                  <div className="text-center py-24 space-y-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                      <Search className="w-8 h-8 text-zinc-600" />
                    </div>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">No simulations found</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'zone' && (
            <div className="max-w-4xl mx-auto space-y-12 py-12">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-neon-emerald/10 rounded-3xl flex items-center justify-center border border-neon-emerald/20 mx-auto">
                  <Zap className="w-10 h-10 text-neon-emerald" />
                </div>
                <h2 className="text-4xl font-bold tracking-tight uppercase">The Zone</h2>
                <p className="text-zinc-400 max-w-md mx-auto font-light">Special access area for community contributors and authors.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-[#151515] rounded-3xl border border-white/5 space-y-4 group hover:border-neon-emerald/30 transition-all">
                  <h3 className="text-xl font-bold">By Author</h3>
                  <p className="text-sm text-zinc-500 font-light">Explore content specifically curated by the GN-Math developers and community authors.</p>
                  <a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="block w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-all text-center">EXPLORE</a>
                </div>
                <div className="p-8 bg-[#151515] rounded-3xl border border-white/5 space-y-4 group hover:border-neon-emerald/30 transition-all">
                  <h3 className="text-xl font-bold">Community Hub</h3>
                  <p className="text-sm text-zinc-500 font-light">Join the discussion and contribute to the growth of the GN-Math network.</p>
                  <a href="https://discord.gg/NAFw4ykZ7n" target="_blank" rel="noreferrer" className="block w-full py-3 bg-neon-emerald text-black rounded-xl text-sm font-bold transition-all text-center">JOIN DISCORD</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-2xl mx-auto space-y-12 py-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">System Configuration</h2>
                <p className="text-zinc-400 font-light">Manage your experience and simulation data.</p>
              </div>

              <div className="space-y-8">
                <section className="space-y-4">
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Cloaking & Privacy</h3>
                  <div className="p-6 bg-[#151515] rounded-2xl flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-4">
                      <Shield className="w-5 h-5 text-neon-emerald" />
                      <div>
                        <div className="font-bold text-sm">About:Blank Cloak</div>
                        <div className="text-[10px] text-zinc-500 font-light">Hides site from browser history and tabs.</div>
                      </div>
                    </div>
                    <button 
                      onClick={handleAboutBlank}
                      className="px-6 py-2 bg-neon-emerald text-black font-bold rounded-lg text-xs hover:bg-emerald-400 transition-all"
                    >
                      ACTIVATE
                    </button>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Data Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="p-6 bg-[#151515] rounded-2xl text-left border border-white/5 hover:border-neon-emerald/30 transition-all group">
                      <Download className="w-5 h-5 text-zinc-500 mb-2 group-hover:text-neon-emerald transition-colors" />
                      <div className="font-bold text-sm">Export Save Data</div>
                      <div className="text-[10px] text-zinc-500 font-light">Backup your simulation progress.</div>
                    </button>
                    <button className="p-6 bg-[#151515] rounded-2xl text-left border border-white/5 hover:border-neon-emerald/30 transition-all group">
                      <Upload className="w-5 h-5 text-zinc-500 mb-2 group-hover:text-neon-emerald transition-colors" />
                      <div className="font-bold text-sm">Import Save Data</div>
                      <div className="text-[10px] text-zinc-500 font-light">Restore progress from a file.</div>
                    </button>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">System Info</h3>
                  <div className="bg-[#151515] rounded-2xl border border-white/5 divide-y divide-white/5">
                    {[
                      { label: 'Engine', value: 'Ultraviolet v3.2' },
                      { label: 'Version', value: '2.0.4-stable' },
                      { label: 'Developer', value: 'breadbb' },
                      { label: 'Contributor', value: 'sealiee1' },
                    ].map((info) => (
                      <div key={info.label} className="flex justify-between items-center p-4">
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{info.label}</span>
                        <span className="text-xs font-bold">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-auto border-t border-white/5 bg-[#0a0a0a] p-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-neon-emerald" />
                  <span className="text-xl font-bold tracking-tighter uppercase">GN-MATH</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  The ultimate destination for web-based simulations and unblocked gaming. 
                  Built for speed, privacy, and performance.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Community</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><a href="https://discord.gg/NAFw4ykZ7n" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Discord Server</a></li>
                  <li><a href="https://github.com/gn-math" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">GitHub Org</a></li>
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Community Hub</a></li>
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Partners</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Tools</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><button onClick={handleAboutBlank} className="hover:text-neon-emerald transition-colors">About:Blank Cloak</button></li>
                  <li><button onClick={() => setActiveTab('settings')} className="hover:text-neon-emerald transition-colors">Save Manager</button></li>
                  <li><button onClick={() => setActiveTab('settings')} className="hover:text-neon-emerald transition-colors">System Info</button></li>
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Developer API</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Legal</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Terms of Service</a></li>
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Privacy Policy</a></li>
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">DMCA</a></li>
                  <li><a href="https://gn-math.dev/" target="_blank" rel="noreferrer" className="hover:text-neon-emerald transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">
                © 2024 GN-MATH • ALL RIGHTS RESERVED
              </p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">
                MADE WITH <span className="text-neon-emerald">❤</span> BY BREADBB
              </p>
            </div>
          </footer>
        </div>
      </main>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col"
          >
            <div className="h-16 bg-[#0f0f0f] border-b border-white/10 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <img src={selectedGame.thumbnail} className="w-8 h-8 rounded-lg object-cover" alt="" />
                  <div>
                    <h2 className="text-sm font-bold tracking-tight leading-none mb-1">{selectedGame.title}</h2>
                    <p className="text-[9px] text-neon-emerald font-mono uppercase tracking-widest leading-none">Simulation Active</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-zinc-400 hover:text-white">
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button className="px-5 py-1.5 bg-neon-emerald text-black font-bold rounded-lg text-xs hover:bg-emerald-400 transition-all">
                  FULLSCREEN
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black relative">
              <iframe
                src={selectedGame.url}
                className="w-full h-full border-none"
                title={selectedGame.title}
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

