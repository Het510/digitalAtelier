import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowUpRight, Copy, Share2, TrendingUp, Megaphone, CheckCircle } from 'lucide-react';

export default function PublishPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Header 
        title="Digital Atelier" 
        tabs={['Dashboard', 'Templates', 'Analytics']} 
        activeTab="Dashboard" 
      />
      
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden mb-6">
            <div className="flex-1 p-12 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your website is live!</h2>
              <p className="text-gray-500 mb-8 max-w-sm">
                Your creative vision is now shared with the world. Your atelier is officially open for business.
              </p>

              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2 pl-4 w-full max-w-md mb-6">
                <span className="text-sm text-gray-600 flex-1 text-left truncate">atelier.studio/modern-living</span>
                <button className="text-primary p-2 hover:bg-primary/10 rounded-md transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <button onClick={() => navigate('/editor')} className="w-full max-w-md bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg mb-4 transition-colors">
                Visit Website
              </button>
              <button onClick={() => navigate('/dashboard')} className="text-primary text-sm font-medium hover:underline">
                Back to Dashboard
              </button>
            </div>
            
            <div className="flex-1 bg-gray-900 relative">
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                {/* Mockup visualization */}
                <div className="w-full max-w-sm aspect-[4/3] bg-black rounded-lg border-4 border-gray-800 shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="flex-1 bg-gray-800"></div>
                  <div className="h-4 bg-gray-700 w-full"></div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
                <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Pro Tip</p>
                <p className="text-xs text-gray-300">Connect your own custom domain in settings to build professional brand authority.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Share Launch</h3>
                <p className="text-xs text-gray-500">Announce your new site on social media channels.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Track Traffic</h3>
                <p className="text-xs text-gray-500">Visit your analytics dashboard to see your visitors.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">SEO Boost</h3>
                <p className="text-xs text-gray-500">Optimize your site metadata for better search ranking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
