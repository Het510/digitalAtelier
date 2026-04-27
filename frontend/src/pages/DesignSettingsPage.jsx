import Header from '../components/Header';
import { Type, Sparkles } from 'lucide-react';

export default function DesignSettingsPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Header 
        title="My Online Boutique" 
        tabs={['Dashboard', 'Site Editor']} 
        activeTab="Site Editor" 
      />
      
      <div className="p-8 max-w-7xl mx-auto w-full pb-24 relative">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Styling</h1>
          <p className="text-sm text-gray-500">
            Define the visual DNA of your digital storefront.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Typography */}
          <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-8">
            <div className="flex-1">
               <div className="flex justify-between items-center mb-6">
                 <div>
                   <h3 className="font-bold text-gray-900">Typography</h3>
                   <p className="text-xs text-gray-500">Manage your font pairings and sizing scales.</p>
                 </div>
                 <Type className="w-5 h-5 text-primary" />
               </div>
               
               <div className="mb-4">
                 <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Headings Font</label>
                 <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary font-medium">
                   <option>Inter Display</option>
                   <option>Playfair Display</option>
                 </select>
               </div>
               
               <div>
                 <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Body Font</label>
                 <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary font-medium">
                   <option>Inter Regular</option>
                   <option>Roboto</option>
                 </select>
               </div>
            </div>
            
            <div className="flex-1 bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-3 tracking-tight">The quick brown fox jumps over the lazy dog.</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Designing a digital experience is more than just placing pixels. It's about creating a conversation between the brand and the user.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold bg-white border border-gray-200 px-2 py-1 rounded text-gray-700 uppercase">Display LG</span>
                <span className="text-[10px] font-bold bg-white border border-gray-200 px-2 py-1 rounded text-gray-700 uppercase">Body MD</span>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="col-span-1 bg-gray-100 rounded-2xl p-6 border border-gray-200">
             <h3 className="font-bold text-gray-900 mb-1">Color Palette</h3>
             <p className="text-xs text-gray-500 mb-6">Brand colors & accents.</p>
             
             <div className="space-y-3">
               {[
                 { name: 'Primary', hex: '#3B28CC', color: 'bg-[#3B28CC]' },
                 { name: 'Accent', hex: '#571AC0', color: 'bg-[#571AC0]' },
                 { name: 'Secondary', hex: '#8B9776', color: 'bg-[#8B9776]' }
               ].map(c => (
                 <div key={c.name} className="bg-white p-2 rounded-xl flex items-center justify-between border border-gray-200 shadow-sm cursor-pointer hover:border-gray-300">
                   <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-lg ${c.color}`}></div>
                     <div>
                       <p className="text-sm font-bold text-gray-900">{c.name}</p>
                       <p className="text-[10px] text-gray-500 uppercase">{c.hex}</p>
                     </div>
                   </div>
                   <div className="pr-2 text-gray-400 hover:text-gray-600">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                   </div>
                 </div>
               ))}
             </div>
             
             <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-200">
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Contrast Check</span>
               <span className="text-xs font-bold text-green-600 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> AAA Pass</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Global Rounding */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900">Global Rounding</h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </div>
            
            <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
              <span>Sharp (0px)</span>
              <span>Pill (99px)</span>
            </div>
            {/* Slider placeholder */}
            <div className="w-full h-1 bg-gray-200 rounded-full mb-8 relative">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full"></div>
              <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
            </div>
            
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
               <div className="flex-1 bg-white border-2 border-dashed border-primary/40 rounded-xl aspect-square flex items-center justify-center relative">
                 <span className="absolute top-2 left-2 text-[8px] font-bold text-primary uppercase">Preview</span>
                 <div className="w-16 h-16 bg-primary/20 rounded-xl border border-primary/30"></div>
               </div>
               <div className="flex-1 bg-white border border-gray-200 rounded-xl aspect-square flex items-center justify-center">
                 <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-sm">Button Style</button>
               </div>
            </div>
          </div>

          {/* Container Width */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900">Container Width</h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            
            <div className="flex gap-4 mb-8">
              {['Narrow', 'Standard', 'Fluid'].map((type, i) => (
                <div key={type} className={`flex-1 border rounded-lg p-2 flex flex-col items-center justify-center gap-2 cursor-pointer ${i===0 ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                  <div className={`h-8 border-2 rounded ${i===0 ? 'border-primary w-12' : i===1 ? 'border-gray-300 w-16' : 'border-gray-300 w-full'}`}></div>
                  <span className="text-[10px] font-bold uppercase">{type}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Max-Width</span>
                <span className="text-sm font-bold text-gray-900">1280px</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Gutter Width</span>
                <span className="text-sm font-bold text-gray-900">32px</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Banner */}
        <div className="bg-primary rounded-2xl p-8 flex items-center justify-between text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded mb-4">
              <Sparkles className="w-3 h-3" /> AI Creative Studio
            </span>
            <h3 className="text-2xl font-bold mb-2 leading-tight">Generate a cohesive theme from an image</h3>
            <p className="text-sm text-primary-100">
              Upload a brand moodboard or photo and our AI will extract a professional typography and color palette for your entire project.
            </p>
          </div>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-colors relative z-10 whitespace-nowrap">
            Launch Magic Studio
          </button>
        </div>
      </div>
      
      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center px-8 z-20">
        <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors">
          New Project
        </button>
        <div className="flex gap-4 items-center">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Discard Changes</button>
          <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors">
            Save Design Tokens
          </button>
        </div>
      </div>
    </div>
  );
}
