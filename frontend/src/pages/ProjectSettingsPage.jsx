import Header from '../components/Header';
import { Info, Search, Code, Eye, AlertTriangle } from 'lucide-react';

export default function ProjectSettingsPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Header 
        title="My Online Boutique" 
        tabs={['Dashboard', 'Site Editor']} 
        activeTab="Site Editor" 
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Nav */}
        <div className="w-64 border-r border-gray-200 p-6 bg-white hidden md:block">
           <h2 className="text-xl font-bold text-gray-900 mb-8">Project Settings</h2>
           <nav className="space-y-2">
             <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-primary/5 text-primary rounded-lg text-sm font-bold border border-primary/10">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>
               General Settings
             </button>
             <button className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
               <Search className="w-4 h-4" />
               SEO & Social
             </button>
             <button className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
               <Code className="w-4 h-4" />
               Advanced
             </button>
           </nav>
        </div>

        {/* Main Settings Content */}
        <div className="flex-1 p-8 overflow-y-auto pb-24 max-w-4xl mx-auto w-full">
           <h1 className="text-3xl font-bold text-gray-900 mb-2 md:hidden">Project Settings</h1>
           <p className="text-sm text-gray-500 mb-8 md:hidden">Manage your digital atelier's configuration, presence, and advanced integrations.</p>

           {/* General Settings */}
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-6">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">General Settings</h3>
                  <p className="text-sm text-gray-500">Basic information about your project.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                 <div>
                   <label className="block text-xs font-bold text-gray-700 mb-2">Project Name</label>
                   <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" defaultValue="My Online Boutique" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-700 mb-2">Internal Reference ID</label>
                   <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" defaultValue="DA-7729-BQ" disabled />
                 </div>
              </div>

              <div>
                 <label className="block text-xs font-bold text-gray-700 mb-2">Primary Domain</label>
                 <div className="flex gap-4">
                   <input type="text" className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" defaultValue="https://boutique.atelier.com" />
                   <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">Connect Custom Domain</button>
                 </div>
              </div>
           </div>

           {/* SEO & Social */}
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-6">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">SEO & Social Branding</h3>
                  <p className="text-sm text-gray-500">Optimize how your site appears in search engines and social feeds.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Global Title Tag</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" defaultValue="The Digital Atelier | Bespoke Fashion Curated for You" />
                    <p className="text-[10px] text-gray-400 mt-1 flex justify-between"><span>Ideal length: 50-60 characters</span><span>54/60</span></p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Meta Description</label>
                    <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 h-24 resize-none" defaultValue="Discover a curated collection of artisanal pieces from around the world. Shop high-end fashion with a sustainable conscience."></textarea>
                    <p className="text-[10px] text-gray-400 mt-1 flex justify-between"><span>Ideal length: 150-160 characters</span><span>142/160</span></p>
                  </div>
                </div>
                <div>
                   <label className="block text-xs font-bold text-gray-700 mb-2">Social Share Preview</label>
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                     <div className="h-32 bg-gray-100 relative">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                     </div>
                     <div className="p-4 bg-gray-50">
                       <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
                       <div className="h-4 bg-gray-400 rounded w-full mb-1"></div>
                       <div className="h-4 bg-gray-400 rounded w-2/3"></div>
                     </div>
                   </div>
                   <p className="text-[10px] text-gray-500 mt-2">Recommended 1200x630px for optimal social platform rendering.</p>
                </div>
              </div>
           </div>

           {/* Advanced */}
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-6">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Advanced Configuration</h3>
                  <p className="text-sm text-gray-500">Scripts, API keys, and system-level integrations.</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-6 border-b border-gray-200 mb-4">
                  <button className="pb-2 text-sm font-bold border-b-2 border-primary text-primary">Header Scripts</button>
                  <button className="pb-2 text-sm font-medium border-b-2 border-transparent text-gray-500">Footer Scripts</button>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-green-400 h-32 relative">
                  {'<!-- Insert your tracking codes or custom CSS here -->'}
                  <span className="absolute top-4 right-4 text-[10px] bg-white/10 text-white/50 px-2 py-1 rounded">HTML / JS / CSS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Google Analytics ID</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 pr-10" defaultValue="G-ANALYTICS-X9920" />
                    <Eye className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Stripe Public Key</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 pr-10" defaultValue="pk_live_..." />
                    <Eye className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4" /> Danger Zone
                  </h4>
                  <p className="text-xs text-red-600">Permanently delete this project and all associated assets. This action is irreversible.</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-sm">
                  Delete Project
                </button>
              </div>

           </div>
        </div>
      </div>
      
      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center px-8 z-20 md:left-0">
        <div className="hidden md:block"></div> {/* Spacer for md */}
        <div className="flex gap-4 items-center ml-auto">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 px-6 py-2.5 rounded-lg transition-colors">Discard Changes</button>
          <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors shadow-sm">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
