import React from 'react';
import { useAnalytics } from './hooks/useAnalytics';
import TerminalContact from './components/TerminalContact';
import InteractiveGlobe from './components/InteractiveGlobe';
import { Linkedin, FileText } from 'lucide-react';

const App = () => {
  const { trackEvent } = useAnalytics();

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans selection:bg-green-500 selection:text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full">

        {/* HERO SECTION */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900 rounded-3xl p-8 flex flex-col justify-between border border-neutral-800 hover:border-neutral-700 transition-colors">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-4">
              AVAILABLE FOR WORK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Abhay<br />Pratap<br />Singh.
            </h1>
            <p className="text-neutral-400 text-lg max-w-md">
              Senior Software Engineer based in India. Specializing in <span className="text-white">Java, Spring Boot,</span> and scalable <span className="text-white">Cloud Architecture</span>.
            </p>
          </div>
          <div className="flex gap-3 mt-8">
          <a href="/Abhay_Pratap_Singh_Resume.pdf"
             target="_blank"
             onClick={() => trackEvent('Download_Resume')}
             // CHANGED: px-6 py-3 -> px-5 py-2, text-sm
             className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2">
             <FileText size={16} /> Download CV
          </a>

          <a href="https://linkedin.com/in/abhayprataps"
             target="_blank"
             onClick={() => trackEvent('Social_Click', { platform: 'LinkedIn' })}
             // CHANGED: px-6 py-3 -> px-5 py-2, text-sm
             className="bg-neutral-800 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-neutral-700 transition-colors flex items-center gap-2">
             <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        </div>

        {/* MAP SECTION */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 relative group">
          <InteractiveGlobe />
        </div>

        {/* CURRENT ROLE SECTION */}
        <div className="col-span-1 md:col-span-1 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 flex flex-col justify-between">
           <h3 className="text-neutral-500 text-xs font-mono uppercase">Current Role</h3>
           <div>
             <div className="text-3xl font-bold">Optum[UHG]</div>
             <div className="text-neutral-400 text-sm">Sr. Software Engineer</div>
             <div className="text-neutral-600 text-xs mt-1">2022 — Present</div>
           </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="col-span-1 md:col-span-1 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 flex flex-col justify-center">
          <h3 className="text-neutral-500 text-xs font-mono mb-4 uppercase">Core Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'Kafka', 'Python', 'Azure', 'Github Actions', 'Postgres', 'GenAI'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-800 rounded-md text-sm text-neutral-300 border border-neutral-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* TERMINAL SECTION */}
        <div className="col-span-1 md:col-span-2 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800">
           <TerminalContact />
        </div>

      </div>
    </div>
  );
};

export default App;
