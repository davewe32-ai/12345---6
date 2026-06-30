import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 120, className = '', showText = false }: LogoProps) {
  return (
    <div className={`relative flex items-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden linear gradient for borders and paths */}
          <linearGradient id="gold-linear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" /> {/* Tailwind yellow-200 */}
            <stop offset="30%" stopColor="#d4af37" /> {/* Metallic Gold */}
            <stop offset="70%" stopColor="#aa8b2e" /> {/* Dark Gold */}
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          {/* Golden radial gradient for central background */}
          <radialGradient id="gold-radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#fffbeb" /> {/* Tailwind amber-50 */}
            <stop offset="25%" stopColor="#fef3c7" /> {/* Tailwind amber-100 */}
            <stop offset="60%" stopColor="#f59e0b" /> {/* Tailwind amber-500 */}
            <stop offset="85%" stopColor="#d97706" /> {/* Tailwind amber-600 */}
            <stop offset="100%" stopColor="#78350f" /> {/* Tailwind amber-900 */}
          </radialGradient>

          {/* Deep Navy/Black gradient for outer ring */}
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" /> {/* Tailwind slate-900 */}
            <stop offset="50%" stopColor="#1e293b" /> {/* Tailwind slate-800 */}
            <stop offset="100%" stopColor="#020617" /> {/* Tailwind slate-950 */}
          </linearGradient>

          {/* Pyramid Left Facet Gradient */}
          <linearGradient id="gold-facet-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#ca8a04" /> {/* Tailwind yellow-600 */}
          </linearGradient>

          {/* Pyramid Right Facet Gradient */}
          <linearGradient id="gold-facet-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a16207" /> {/* Tailwind yellow-700 */}
            <stop offset="100%" stopColor="#451a03" /> {/* Dark amber-950 */}
          </linearGradient>

          {/* Text path definition: Clockwise semi-circle arc from lower-left to lower-right */}
          <path
            id="logo-text-path"
            d="M 82,375 A 206,206 0 1,1 418,375"
            fill="none"
          />
        </defs>

        {/* 1. Outermost Gold Boundary Ring */}
        <circle
          cx="250"
          cy="250"
          r="242"
          fill="none"
          stroke="url(#gold-linear)"
          strokeWidth="7"
          className="drop-shadow-lg"
        />

        {/* 2. Deep Blue Textured Band for Association Name */}
        <circle
          cx="250"
          cy="250"
          r="234"
          fill="url(#blue-gradient)"
          stroke="url(#gold-linear)"
          strokeWidth="3"
        />

        {/* 3. Text along Path: ASSOCIATION NAME */}
        <text
          fontFamily='"Cinzel", "Marcellus", "Inter", "Outfit", sans-serif'
          fontWeight="800"
          fontSize="17.2"
          letterSpacing="4.5"
          fill="#ffffff"
        >
          <textPath href="#logo-text-path" startOffset="50%" textAnchor="middle">
            INTERNATIONAL PYRAMID VAASTU PROFESSIONALS' ASSOCIATION
          </textPath>
        </text>

        {/* 4. Inner Gold Boundary Ring */}
        <circle
          cx="250"
          cy="250"
          r="174"
          fill="none"
          stroke="url(#gold-linear)"
          strokeWidth="4"
        />

        {/* 5. Central Sacred Golden Chamber Background */}
        <circle
          cx="250"
          cy="250"
          r="170"
          fill="url(#gold-radial)"
        />

        {/* 6. Sacred Energy Rays (Sunburst Lines) */}
        <g opacity="0.3">
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i * 360) / 60;
            const rad = (angle * Math.PI) / 180;
            const x2 = 250 + Math.cos(rad) * 170;
            const y2 = 250 + Math.sin(rad) * 170;
            return (
              <line
                key={i}
                x1={250}
                y1={250}
                x2={x2}
                y2={y2}
                stroke="#fef08a"
                strokeWidth="1.2"
              />
            );
          })}
        </g>

        {/* 7. Radiating Celestial Crowns (Hair Fountain) */}
        <g stroke="url(#gold-linear)" fill="none" strokeWidth="1.5" opacity="0.85">
          {Array.from({ length: 15 }).map((_, i) => {
            const startX = 225 + (i * 5);
            const endX = 140 + (i * 15.7);
            return (
              <path
                key={i}
                d={`M ${startX}, 145 C ${startX}, 110 ${250 + (endX - 250) * 0.5}, 90 ${endX}, 80`}
              />
            );
          })}
        </g>

        {/* 8. Symmetrical Fan of Wings / Arms (Left and Right) */}
        <g opacity="0.95">
          {/* Left Wing of Arms */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = 145 + i * 9.5;
            const rad = (angle * Math.PI) / 180;
            const x1 = 220;
            const y1 = 180 + (i * 2.5);
            const ctrlX = x1 + Math.cos(rad) * 110;
            const ctrlY = y1 + Math.sin(rad) * 80;
            const endX = x1 + Math.cos(rad) * 145;
            const endY = y1 + Math.sin(rad) * 125;
            return (
              <g key={`l-${i}`}>
                <path
                  d={`M ${x1},${y1} Q ${ctrlX},${ctrlY} ${endX},${endY}`}
                  fill="none"
                  stroke="url(#gold-linear)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <circle cx={endX} cy={endY} r="3" fill="#ffffff" stroke="url(#gold-linear)" strokeWidth="1" />
              </g>
            );
          })}

          {/* Right Wing of Arms */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = 35 - i * 9.5;
            const rad = (angle * Math.PI) / 180;
            const x1 = 280;
            const y1 = 180 + (i * 2.5);
            const ctrlX = x1 + Math.cos(rad) * 110;
            const ctrlY = y1 + Math.sin(rad) * 80;
            const endX = x1 + Math.cos(rad) * 145;
            const endY = y1 + Math.sin(rad) * 125;
            return (
              <g key={`r-${i}`}>
                <path
                  d={`M ${x1},${y1} Q ${ctrlX},${ctrlY} ${endX},${endY}`}
                  fill="none"
                  stroke="url(#gold-linear)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <circle cx={endX} cy={endY} r="3" fill="#ffffff" stroke="url(#gold-linear)" strokeWidth="1" />
              </g>
            );
          })}
        </g>

        {/* 9. Symmetrical Feet / Legs Base */}
        <g stroke="url(#gold-linear)" fill="url(#gold-linear)" strokeWidth="1.5" opacity="0.9">
          {Array.from({ length: 10 }).map((_, i) => {
            const offset = (i - 4.5) * 22; // spread from center
            const xVal = 250 + offset;
            const controlOffset = offset * 0.7;
            return (
              <path
                key={i}
                d={`M ${250 + offset * 0.25}, 265 Q ${250 + controlOffset}, 310 ${xVal}, 365 L ${xVal + (offset < 0 ? -10 : 10)}, 370`}
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* 10. Multi-Headed Divine Architect (Torso & Faces) */}
        <g className="drop-shadow-md">
          {/* Torso & Shoulders */}
          <path
            d="M 205,190 C 205,175 220,165 250,165 C 280,165 295,175 295,190 C 295,215 280,265 250,265 C 220,265 205,215 205,190 Z"
            fill="url(#blue-gradient)"
            stroke="url(#gold-linear)"
            strokeWidth="3"
          />

          {/* Central Face */}
          <circle cx="250" cy="148" r="17" fill="url(#blue-gradient)" stroke="url(#gold-linear)" strokeWidth="2.5" />
          {/* Left Profile Head */}
          <circle cx="231" cy="149" r="13" fill="url(#blue-gradient)" stroke="url(#gold-linear)" strokeWidth="2" opacity="0.95" />
          {/* Far Left Profile Head */}
          <circle cx="216" cy="151" r="10" fill="url(#blue-gradient)" stroke="url(#gold-linear)" strokeWidth="1.5" opacity="0.85" />
          {/* Right Profile Head */}
          <circle cx="269" cy="149" r="13" fill="url(#blue-gradient)" stroke="url(#gold-linear)" strokeWidth="2" opacity="0.95" />
          {/* Far Right Profile Head */}
          <circle cx="284" cy="151" r="10" fill="url(#blue-gradient)" stroke="url(#gold-linear)" strokeWidth="1.5" opacity="0.85" />

          {/* Neck Connections */}
          <path d="M 240,165 L 240,158 L 260,158 L 260,165 Z" fill="url(#blue-gradient)" stroke="url(#gold-linear)" strokeWidth="2" />
        </g>

        {/* 11. Abdominal Sacred Hexagram Center (Shatkona) */}
        <g>
          {/* Circular Shield Plate */}
          <circle
            cx="250"
            cy="242"
            r="35"
            fill="url(#blue-gradient)"
            stroke="url(#gold-linear)"
            strokeWidth="3"
            className="shadow-md"
          />
          <circle
            cx="250"
            cy="242"
            r="31"
            fill="none"
            stroke="url(#gold-linear)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />

          {/* Interlocking Triangles forming the 6-Pointed Star */}
          {/* Triangle 1 (Pointing Up) */}
          <polygon
            points="250,217 274,254 226,254"
            fill="none"
            stroke="url(#gold-linear)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Triangle 2 (Pointing Down) */}
          <polygon
            points="250,267 274,230 226,230"
            fill="none"
            stroke="url(#gold-linear)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Center Bindu (Divine Core Dot) */}
          <circle
            cx="250"
            cy="242"
            r="5"
            fill="url(#gold-linear)"
            className="animate-pulse"
          />
        </g>

        {/* 12. Golden 3D Pyramid at the Base (The Foundation of Vaastu) */}
        <g transform="translate(250, 400)" className="drop-shadow-2xl">
          {/* Base Shadow / Soft Outer Golden Glow */}
          <polygon
            points="-68,10 0,22 68,10 0,30"
            fill="#eab308"
            opacity="0.35"
            className="blur-[2px]"
          />

          {/* Left Facet: Highly Reflective Metallic Gold */}
          <polygon
            points="0,-52 -55,10 0,22"
            fill="url(#gold-facet-left)"
            stroke="url(#gold-linear)"
            strokeWidth="1.5"
          />

          {/* Right Facet: Deep Contrast Rich Gold */}
          <polygon
            points="0,-52 55,10 0,22"
            fill="url(#gold-facet-right)"
            stroke="url(#gold-linear)"
            strokeWidth="1.5"
          />

          {/* Golden pyramid peak spark / reflection */}
          <circle
            cx="0"
            cy="-52"
            r="3"
            fill="#ffffff"
            className="animate-pulse"
          />
        </g>
      </svg>
    </div>
  );
}
