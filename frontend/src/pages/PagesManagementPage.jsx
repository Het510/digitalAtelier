import Header from '../components/Header';
import { Search, Plus, MoreVertical, Edit2 } from 'lucide-react';

export default function PagesManagementPage() {
  const pages = [
    { name: 'Home', status: 'PUBLISHED', date: 'Oct 24, 2023', views: '1.2k', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&auto=format&fit=crop' },
    { name: 'About Us', status: 'DRAFT', date: 'Nov 12, 2023', views: 'Not yet public', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Blog', status: 'PUBLISHED', date: 'Oct 29, 2023', views: '842', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=400&auto=format&fit=crop' },
    { name: 'Contact', status: 'PUBLISHED', date: 'Oct 15, 2023', views: '310', image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Header 
        title="My Online Boutique" 
        tabs={['Dashboard', 'Site Editor']} 
        activeTab="Site Editor" 
      />
      
      <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Pages</h1>
            <p className="text-sm text-gray-500 max-w-xl">
              Manage the architecture of your digital atelier. Organize content, drafts, and publication status in one curated space.
            </p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            Add New Page
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {pages.map((page) => (
            <div key={page.name} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all group">
              <div className="aspect-[16/10] bg-gray-100 rounded-xl mb-4 relative overflow-hidden">
                <img src={page.image} alt={page.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${
                    page.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${page.status === 'PUBLISHED' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    {page.status}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-gray-900">{page.name}</h3>
                <div className="flex text-gray-400 gap-1">
                  <button className="p-1 hover:text-gray-900"><Edit2 className="w-4 h-4" /></button>
                  <button className="p-1 hover:text-gray-900"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex text-[10px] text-gray-500 gap-3">
                <span className="flex items-center gap-1">📅 {page.date}</span>
                <span className="flex items-center gap-1">👁️ {page.views} views</span>
              </div>
            </div>
          ))}

          {/* Add New Page Card */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer min-h-[250px]">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Plus className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm">Add New Page</h3>
            <p className="text-[10px] text-gray-500 max-w-[150px]">
              Start from a template or blank canvas
            </p>
          </div>
        </div>

        {/* Global SEO Settings Banner */}
        <div className="bg-primary rounded-2xl p-6 flex items-center justify-between text-white">
          <div>
            <h3 className="text-lg font-bold mb-1">Global SEO Settings</h3>
            <p className="text-sm text-primary-100">Update metadata for all pages to improve search engine rankings.</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Open Settings
          </button>
        </div>

      </div>
    </div>
  );
}
