import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { useAnalytics } from '../hooks/useAnalytics';
import { careerHistory } from '../data/careerData';
import { X, MapPin, Calendar } from 'lucide-react'; // Ensure you have lucide-react installed

export default function InteractiveGlobe() {
  const canvasRef = useRef();
  const containerRef = useRef();
  const { trackEvent } = useAnalytics();
  const [isExpanded, setIsExpanded] = useState(false);
  const [focusLocation, setFocusLocation] = useState(null);

  // Toggle the Expanded View
  const handleGlobeClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      trackEvent('Globe_Interaction', { action: 'Opened Map Details' });
    }
  };

  // Close View
  const handleClose = (e) => {
    e.stopPropagation(); // Prevent re-triggering the open
    setIsExpanded(false);
    setFocusLocation(null);
  };

  // Prepare markers
  const markers = careerHistory.map(item => ({
    location: item.coordinates,
    size: 0.1
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;

    // Safari Fix: Ensure container has width before rendering
    if (containerRef.current) {
      width = containerRef.current.offsetWidth;
    }

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2 || 600 * 2,
      height: width * 2 || 600 * 2,
      phi: 0,
      theta: 0.3, // Tilt it slightly so India is visible
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.1, 0.8, 1], // Cyan
      glowColor: [0.1, 0.1, 0.2],
      markers: markers,
      onRender: (state) => {
        // Auto-spin if not expanded
        if (!isExpanded) {
           state.phi = phi;
           phi += 0.003;
        } else {
           // Slow down spin when reading details
           state.phi = phi + 0.0005;
        }
      },
    });

    return () => {
      globe.destroy();
    };
  }, [isExpanded]); // Re-render globe behavior when state changes

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center bg-black overflow-hidden transition-all duration-500 ease-in-out
        ${isExpanded ? 'fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-8' : 'cursor-pointer group hover:bg-neutral-800'}
      `}
      onClick={handleGlobeClick}
    >
      {/* EXPANDED VIEW: DETAILS PANEL */}
      {isExpanded && (
        <div className="absolute inset-0 flex flex-col md:flex-row z-20 container mx-auto p-4 md:p-10 animate-fade-in">

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-30"
          >
            <X className="text-white" size={24} />
          </button>

          {/* Left Side: The Globe (Moves to side) */}
          <div className="hidden md:flex flex-1 items-center justify-center opacity-50 pointer-events-none">
             {/* The canvas stays in background */}
          </div>

          {/* Right Side: Timeline Cards */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mt-16 md:mt-0">
            <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4">
              Career Journey
            </h2>

            <div className="space-y-6">
              {careerHistory.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-xl hover:border-green-500/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-xs font-mono text-green-400 bg-green-900/20 px-2 py-1 rounded">
                      {item.dates}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                    <MapPin size={14} /> {item.location}
                    <span className="mx-2">•</span>
                    <span className="text-white font-medium">{item.organization}</span>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="text-xs text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DEFAULT VIEW: LIVE TRACKING LABEL */}
      {!isExpanded && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="text-xs font-mono text-green-400 animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            LIVE TRACKING: HYDERABAD
          </span>
        </div>
      )}

      {/* THE 3D CANVAS */}
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', maxWidth: '600px', aspectRatio: 1 }}
        className={`transition-all duration-700
          ${isExpanded ? 'scale-150 opacity-20 translate-x-[-25%]' : 'opacity-80 group-hover:opacity-100'}
        `}
      />

      {/* DEFAULT VIEW: BOTTOM LABEL */}
      {!isExpanded && (
        <div className="absolute bottom-4 right-4 text-right pointer-events-none">
          <p className="text-gray-500 text-xs font-mono">CLICK TO EXPLORE</p>
          <p className="text-white font-bold text-xl tracking-tighter">MAP VIEW</p>
        </div>
      )}
    </div>
  );
}