import React, { useState, useEffect } from 'react';
import { INITIAL_PORTFOLIO_DATA } from './data/initialData';
import { UserProfileState } from './types/portfolio';
import { sound } from './utils/soundEffects';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfileState>(() => {
    const saved = localStorage.getItem('sakkeer_kalodi_portfolio_state');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO_DATA;
  });

  useEffect(() => {
    localStorage.setItem('sakkeer_kalodi_portfolio_state', JSON.stringify(profile));
  }, [profile]);

  return (
    <div className="min-h-screen bg-brand-black text-slate-100 selection:bg-brand-cyan selection:text-black">
      {/* Self-contained bundle handles interactive 3D, canvas, and live configuration */}
      <iframe
        src="index.html"
        title="Sakkeer Kalodi Portfolio Experience"
        className="w-full h-screen border-0"
      />
    </div>
  );
};

export default App;
