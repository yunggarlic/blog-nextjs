import React from 'react';
import Image from 'next/image';

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src="/assets/pexels-rulo-davila-5380467.m4v"
          type="video/mp4; codecs=hvc1"
        />
        <source
          src="/assets/pexels-rulo-davila-5380467.webm"
          type="video/webm; codecs=vp9"
        />
        <source src="/assets/pexels-rulo-davila-5380467.mp4" type="video/mp4" />
      </video>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Tim Ferrari</h1>
        <h2 className="mb-4 text-3xl xl:text-4xl">
          <span>Web and App Development,</span> <span>monster squad.</span>
        </h2>
      </div>
    </div>
  );
};

export default Masthead;
