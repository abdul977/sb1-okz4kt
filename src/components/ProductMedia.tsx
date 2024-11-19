import React, { useState } from 'react';

export default function ProductMedia() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="space-y-8">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
        {!isVideoPlaying ? (
          <>
            <img
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80"
              alt="SmartChrono Watch"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-opacity"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600 ml-1" />
              </div>
            </button>
          </>
        ) : (
          <video
            autoPlay
            controls
            className="w-full h-full object-cover"
            onEnded={() => setIsVideoPlaying(false)}
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/041/219/original/alb_watch01_preview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80"
          alt="Blue Strap"
          className="rounded-lg aspect-square object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80"
          alt="Black Strap"
          className="rounded-lg aspect-square object-cover"
        />
      </div>
    </div>
  );
}