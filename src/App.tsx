import React from 'react';
import { Code, Palette, Megaphone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <Code className="w-8 h-8 text-purple-600 animate-pulse" />
          <Palette className="w-8 h-8 text-purple-500 animate-pulse delay-75" />
          <Megaphone className="w-8 h-8 text-purple-400 animate-pulse delay-150" />
        </div>
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-4">
          Em Breve
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
        
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-purple-100 p-8">
          <p className="text-xl text-purple-900/70 leading-relaxed">
            Estamos desenvolvendo uma experiência digital única para transformar sua presença online.
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;