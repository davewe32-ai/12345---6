import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 120, className = '', showText = false }: LogoProps) {
  const logoUrl = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHcm_RE8CFXCVRIgjhn7UKystHS6T8JZpDZEBY2c2q2A19pAscnlBmRDA7e17GZeU0zEyAGZQC4q-CH8PYdhXpMDlQ547c8zcsD8OmuwF3jeoDWBE1v8ITYeNikf7rI8zZZ-pFL1GnjIjM=s1360-w1360-h1020-rw";

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src={logoUrl}
        alt="International Pyramid Vaastu Professionals' Association"
        className="w-full h-full object-contain rounded-full"
        style={{ width: size, height: size }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
