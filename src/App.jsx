import React from 'react';
import { useAnalytics } from './hooks/useAnalytics';
import TerminalContact from './components/TerminalContact';
import InteractiveGlobe from './components/InteractiveGlobe';
import { Linkedin, FileText, Instagram } from 'lucide-react';

const App = () => {
  const { trackEvent } = useAnalytics();

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans selection:bg-green-500 selection:text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-4 min-h-screen">

        {/* HERO SECTION */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900 rounded-3xl p-8 flex flex-col justify-between border border-neutral-800 hover:border-neutral-700 transition-colors">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-4">
              AVAILABLE FOR WORK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Abhay<br />Pratap<br />Singh.
            </h1>
            <div className="text-neutral-400 text-sm md:text-base max-w-lg space-y-4 leading-relaxed">
              <p>
                I’m a <span className="text-white font-medium">Senior Software Engineer</span> with experience designing and building backend services using <span className="text-white font-medium">Java, Spring Boot, Python, and microservices architecture</span>, with a growing focus on <span className="text-white font-medium">AI-assisted development</span> and intelligent automation.
              </p>

              <p>
                I’ve worked on systems that handle <span className="text-white font-medium">high-volume digital communication</span>, event-driven workflows, and data processing, where reliability, scalability, and performance are critical.
              </p>

              <div>
                <p className="mb-2">Recently, I’ve been leveraging <span className="text-white font-medium">AI tools and cloud-based AI services</span> to:</p>
                <ul className="list-disc list-inside space-y-1 ml-1 text-neutral-500 marker:text-green-500">
                  <li>Improve developer productivity</li>
                  <li>Automate workflows and testing</li>
                  <li>Enhance system observability and decision-making</li>
                </ul>
              </div>

              <p>
                I enjoy building clean, maintainable systems and continuously exploring how <span className="text-white font-medium">AI can be applied pragmatically</span> to real-world software engineering problems.
              </p>

              <p className="text-neutral-500 italic pt-2">
                I’m always open to discussing new opportunities, collaborations, or interesting projects.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
          {/* Resume Button */}
          <a href="/Abhay_Pratap_Singh_Resume.pdf"
             target="_blank"
             onClick={() => trackEvent('Download_Resume')}
             // CHANGED: px-6 py-3 -> px-5 py-2, text-sm
             className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2">
             <FileText size={16} /> Download CV
          </a>
          {/* LinkedIn Button */}
          <a href="https://linkedin.com/in/abhayprataps"
             target="_blank"
             onClick={() => trackEvent('Social_Click', { platform: 'LinkedIn' })}
             // CHANGED: px-6 py-3 -> px-5 py-2, text-sm
             className="bg-neutral-800 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
             <Linkedin size={16} /> LinkedIn
          </a>
          {/* NEW: Instagram Button */}
          <a href="https://www.instagram.com/abhxz_/"
             target="_blank"
             onClick={() => trackEvent('Social_Click', { platform: 'Instagram' })}
             className="bg-neutral-800 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-pink-600 transition-colors flex items-center gap-2">
             <Instagram size={16} /> Instagram
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
             <div className="text-neutral-400 text-sm">Lead Software Engineer</div>
             <div className="text-neutral-600 text-xs mt-1">2022 — Present</div>
           </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="col-span-1 md:col-span-1 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 flex flex-col justify-center">
          <h3 className="text-neutral-500 text-xs font-mono mb-4 uppercase">Core Technical Stack</h3>
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

      {/* --- ADD FOOTER HERE --- */}
        <footer className="text-center text-neutral-600 text-xs py-8 font-mono">
          <p>© 2026 Abhay Singh • Built with GitHub Pages</p>
        </footer>
    </div>
  );
};

export default App;
