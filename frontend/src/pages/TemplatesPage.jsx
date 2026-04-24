import Header from '../components/Header';
import { Search, Plus, Sparkles } from 'lucide-react';

export default function TemplatesPage() {
  const templates = [
    {
      name: 'Minimalist Muse',
      category: 'PREMIUM',
      description: 'An editorial-first canvas optimized for high-end fashion portfolios and...',
      image: 'https://images.unsplash.com/photo-1528151122822-4416dbf0e4b8?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Digital Noir',
      category: 'POPULAR',
      description: 'A high-contrast, dark-mode focused layout designed for SaaS startups...',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Terra Living',
      category: 'STANDARD',
      description: 'Earthy tones and organic shapes for wellness brands, eco-friendly shops...',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Vanguard Grid',
      category: 'PREMIUM',
      description: 'Bold typography and asymmetrical grids for artists and musicians who...',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Lumina Studio',
      category: 'POPULAR',
      description: 'A versatile, multi-purpose layout designed to handle large amounts of...',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop',
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Header 
        title="Digital Atelier" 
        tabs={['Dashboard', 'Templates', 'Analytics']} 
        activeTab="Templates" 
      />
      
      <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose your canvas.</h1>
            <p className="text-sm text-gray-500 max-w-xl">
              Select a baseline for your creative vision. Every template is fully customizable within your studio environment.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search templates..." 
                className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
              Filter
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-6 border-b border-gray-200 mb-8">
          {['All Categories', 'E-commerce', 'Portfolio', 'Blog & Editorial', 'Services', 'AI & Tech'].map((cat, i) => (
            <button 
              key={cat}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                i === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <div key={template.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900">{template.name}</h3>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                    template.category === 'PREMIUM' ? 'bg-purple-100 text-purple-700' :
                    template.category === 'POPULAR' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {template.category}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {template.description}
                </p>
              </div>
            </div>
          ))}

          {/* Start from scratch card */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer min-h-[300px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Plus className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Start from scratch</h3>
            <p className="text-xs text-gray-500 mb-6 max-w-[200px]">
              Feeling brave? Open the studio with a blank canvas and build your masterpiece from the ground up.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg text-sm transition-colors">
              Open Studio
            </button>
          </div>
        </div>

        {/* Bottom Banner Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 bg-gray-800 text-white rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Build with AI Intelligence.</h3>
            <p className="text-xs text-gray-400 mb-6">Our creative engine analyzes your industry to suggest the best typography and color palettes automatically.</p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-gray-800" />
                ))}
                <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-gray-800 flex items-center justify-center text-[10px] font-bold">
                  +2k
                </div>
              </div>
              <span className="text-[10px] text-gray-400">Joined the studio this month</span>
            </div>
          </div>
          <div className="col-span-1 bg-primary text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold mb-1">99%</h2>
            <p className="text-xs font-bold tracking-widest uppercase mb-2">Speed Score</p>
            <p className="text-[10px] text-primary-100">Optimized for search engines and mobile performance.</p>
          </div>
          <div className="col-span-1 bg-gray-200 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center mb-4 shadow-sm text-gray-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Pixel Perfect</h3>
            <p className="text-xs text-gray-600">Your site looks stunning on any screen size, guaranteed.</p>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white">
               <Sparkles className="w-6 h-6 -ml-2 -mt-2" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
