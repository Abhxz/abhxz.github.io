import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useAnalytics } from '../hooks/useAnalytics';
import { careerHistory } from '../data/careerData';

export default function InteractiveGlobe() {
  const canvasRef = useRef();
  const { trackEvent } = useAnalytics();

  // Prepare markers from career data
  const markers = careerHistory.map(item => ({
    location: item.coordinates,
    size: 0.1
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;

    // Safety check: Ensure canvas exists before trying to draw
    if (!canvasRef.current) return;

    // specific fix: ensure container has width
    width = canvasRef.current.offsetWidth;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2 || 600 * 2, // Fallback if width is 0
      height: width * 2 || 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.1, 0.2],
      markers: markers,
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003; 
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden cursor-pointer group"
      onClick={() => trackEvent('Globe_Clicked', { action: 'Expanded Map' })}
    >
      <div className="absolute top-4 left-4 z-10">
        <span className="text-xs font-mono text-green-400 animate-pulse">
          ● LIVE TRACKING: HYDERABAD
        </span>
      </div>
      
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
        className="opacity-80 transition-opacity duration-500 group-hover:opacity-100"
      />
      
      <div className="absolute bottom-4 right-4 text-right pointer-events-none">
        <p className="text-gray-500 text-xs font-mono">LOCATIONS</p>
        <p className="text-white font-bold text-xl tracking-tighter">INDIA</p>
      </div>
    </div>
  );
}
