import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LayoutTemplate, Link as LinkIcon, Plus } from 'lucide-react';

export default function NewProjectModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState('');
  
  if (!isOpen) return null;

  const handleCreate = () => {
    // Navigate to the editor simulation
    navigate('/editor');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">
            {step === 1 ? 'Start a New Project' : 'Choose a starting point'}
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {step === 1 ? (
            <div className="max-w-md mx-auto space-y-6 py-8">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">What are you building?</label>
                <p className="text-xs text-gray-500 mb-4">Give your project a name. You can change this later.</p>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="e.g. My Awesome Portfolio" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-gray-900"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Primary Domain <span className="text-gray-400 font-normal">(Optional)</span></label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="my-portfolio.atelier.io" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/20 text-gray-900"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div 
                onClick={handleCreate}
                className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all h-64"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Plus className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Blank Canvas</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">Start entirely from scratch using the Atelier Editor.</p>
              </div>

              <div 
                onClick={handleCreate}
                className="border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary hover:border-primary transition-all group h-64 flex flex-col"
              >
                <div className="flex-1 bg-gray-100 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1528151122822-4416dbf0e4b8?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">Minimalist Muse</h3>
                  <p className="text-[10px] text-gray-500">Perfect for portfolios & fashion</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50">
          {step === 2 ? (
            <button onClick={() => setStep(1)} className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
              Back
            </button>
          ) : <div></div>}
          
          {step === 1 && (
            <button 
              disabled={!projectName.trim()}
              onClick={() => setStep(2)} 
              className="px-8 py-2.5 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold rounded-xl shadow-sm transition-colors ml-auto flex items-center gap-2"
            >
              Continue <span className="text-lg leading-none">→</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
