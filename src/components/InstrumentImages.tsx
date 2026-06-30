import React from 'react';

interface InstrumentImageProps {
  id: string;
  className?: string;
}

export default function InstrumentImage({ id, className = '' }: InstrumentImageProps) {
  // Common filters and gradients used across instruments
  const renderDefs = () => (
    <defs>
      {/* Soft drop shadows */}
      <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.08" />
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
      </filter>
      
      <filter id="element-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E293B" floodOpacity="0.12" />
      </filter>

      <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      {/* Gold/Brass Gradients */}
      <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="30%" stopColor="#E6B800" />
        <stop offset="70%" stopColor="#B38600" />
        <stop offset="100%" stopColor="#805C00" />
      </linearGradient>
      
      <linearGradient id="gold-light" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF9D6" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>

      <linearGradient id="gold-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C59B27" />
        <stop offset="100%" stopColor="#5E4810" />
      </linearGradient>

      {/* Copper Gradients */}
      <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5A383" />
        <stop offset="40%" stopColor="#D35400" />
        <stop offset="75%" stopColor="#A04000" />
        <stop offset="100%" stopColor="#5E1F00" />
      </linearGradient>

      <linearGradient id="copper-light" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E59866" />
        <stop offset="100%" stopColor="#FADBD8" />
      </linearGradient>

      {/* White Plastic 3D Gradients */}
      <linearGradient id="white-plastic-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>

      <linearGradient id="white-plastic-shade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>

      <linearGradient id="white-plastic-dark" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>

      {/* Orange Decal Gradients */}
      <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9E80" />
        <stop offset="50%" stopColor="#FF6D00" />
        <stop offset="100%" stopColor="#DD2C00" />
      </linearGradient>

      <linearGradient id="orange-light" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE0B2" />
        <stop offset="100%" stopColor="#FF6D00" />
      </linearGradient>
    </defs>
  );

  // IMAGE 0: PyraVastu Multicone (Classic White Pyramid with Gold/Copper Triangles on Sides)
  const renderInstrument0 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      {/* Studio Background */}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      <circle cx="200" cy="230" r="130" fill="url(#white-plastic-shade)" opacity="0.15" />
      
      {/* Base shadow */}
      <ellipse cx="200" cy="300" rx="140" ry="30" fill="#000000" opacity="0.1" filter="url(#soft-shadow)" />

      {/* Outer base lip of the white pyramid */}
      <path d="M 60 280 L 200 320 L 340 280 L 200 240 Z" fill="url(#white-plastic-shade)" filter="url(#element-shadow)" />
      <path d="M 60 280 L 200 320 L 200 324 L 60 284 Z" fill="url(#white-plastic-dark)" />
      <path d="M 200 320 L 340 280 L 340 284 L 200 324 Z" fill="url(#white-plastic-dark)" />

      {/* Main Pyramid Body */}
      {/* Left Face (shaded) */}
      <path d="M 200 110 L 65 275 L 200 315 Z" fill="url(#white-plastic-shade)" />
      {/* Right Face (highlighted) */}
      <path d="M 200 110 L 335 275 L 200 315 Z" fill="url(#white-plastic-top)" />

      {/* Ridge lines */}
      <path d="M 200 110 L 200 315" stroke="#CBD5E1" strokeWidth="2.5" />
      <path d="M 200 110 L 65 275" stroke="#E2E8F0" strokeWidth="1.5" />
      <path d="M 200 110 L 335 275" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Gold Triangle on Left Face */}
      <path d="M 200 215 L 120 270 L 190 290 Z" fill="url(#copper-grad)" />
      <path d="M 200 215 L 190 290" stroke="#F5A383" strokeWidth="1" />

      {/* Gold Triangle on Right Face */}
      <path d="M 200 215 L 280 270 L 210 290 Z" fill="url(#copper-grad)" />
      <path d="M 200 215 L 210 290" stroke="#F5A383" strokeWidth="1" />

      {/* Vertical groove details on the white faces (authentic design) */}
      <path d="M 180 160 L 165 275" stroke="#94A388" strokeWidth="1" opacity="0.2" />
      <path d="M 220 160 L 235 275" stroke="#94A388" strokeWidth="1" opacity="0.2" />
    </svg>
  );

  // IMAGE 1: Multicone 9x9 Pyramid Set (Dome Shell next to open 3x3 Gold Pyramid tray)
  const renderInstrument1 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Base Shadow */}
      <ellipse cx="200" cy="290" rx="160" ry="40" fill="#0F172A" opacity="0.1" filter="url(#soft-shadow)" />

      {/* LEFT OBJECT: White Pyramid Lid (Tilted/Lifted) */}
      <g transform="translate(-15, -10)">
        {/* Lid base */}
        <path d="M 50 250 L 150 290 L 210 250 L 110 210 Z" fill="url(#white-plastic-shade)" filter="url(#element-shadow)" />
        {/* Lid Sides */}
        <path d="M 130 110 L 50 250 L 150 290 Z" fill="url(#white-plastic-shade)" />
        <path d="M 130 110 L 210 250 L 150 290 Z" fill="url(#white-plastic-top)" />
        {/* Left face gold triangle */}
        <path d="M 130 190 L 85 245 L 140 265 Z" fill="url(#gold-grad)" />
        {/* Right face gold triangle */}
        <path d="M 130 190 L 175 245 L 145 265 Z" fill="url(#gold-grad)" />
        
        {/* Ridge and lip details */}
        <line x1="130" y1="110" x2="150" y2="290" stroke="#CBD5E1" strokeWidth="2" />
      </g>

      {/* RIGHT OBJECT: Open Base Plate with 3x3 Gold Pyramids */}
      <g transform="translate(150, 110)">
        {/* White rectangular container box */}
        <path d="M 20 130 L 150 170 L 220 120 L 90 80 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" />
        <path d="M 20 130 L 150 170 L 150 180 L 20 140 Z" fill="url(#white-plastic-dark)" />
        <path d="M 150 170 L 220 120 L 220 130 L 150 180 Z" fill="url(#white-plastic-dark)" />

        {/* Outer tray border bevel */}
        <path d="M 24 128 L 146 166 L 214 118 L 92 82 Z" fill="#E2E8F0" />
        <path d="M 30 125 L 142 160 L 208 115 L 96 85 Z" fill="#F8FAFC" />

        {/* 3x3 Grid of Gold Pyramids (isometric projection coordinates) */}
        {/* Row 1 (back) */}
        {/* Grid cells: P11(96,95), P12(133,110), P13(170,125) */}
        {/* Row 2 (middle) */}
        {/* Grid cells: P21(76,110), P22(113,125), P23(150,140) */}
        {/* Row 3 (front) */}
        {/* Grid cells: P31(56,125), P32(93,140), P33(130,155) */}

        {/* Helper function simulated for drawing a mini golden pyramid */}
        {/* P11 */}
        <g transform="translate(90, 90)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
        {/* P12 */}
        <g transform="translate(125, 102)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
        {/* P13 */}
        <g transform="translate(160, 114)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>

        {/* P21 */}
        <g transform="translate(70, 104)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
        {/* P22 */}
        <g transform="translate(105, 116)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
        {/* P23 */}
        <g transform="translate(140, 128)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>

        {/* P31 */}
        <g transform="translate(50, 118)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
        {/* P32 */}
        <g transform="translate(85, 130)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
        {/* P33 */}
        <g transform="translate(120, 142)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#gold-light)" />
        </g>
      </g>
    </svg>
  );

  // IMAGE 2: Two PyraVastu Max Strips (Boundary bars with 3 copper arrows + 3 white pyramids in gold frames)
  const renderInstrument2 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Soft Shadows */}
      <ellipse cx="200" cy="270" rx="160" ry="50" fill="#0F172A" opacity="0.08" filter="url(#soft-shadow)" />

      {/* Strip 1 (Top) */}
      <g transform="translate(30, 110)">
        {/* Main white plastic strip */}
        <rect x="0" y="0" width="340" height="60" rx="8" fill="url(#white-plastic-top)" filter="url(#element-shadow)" stroke="#E2E8F0" strokeWidth="1" />
        
        {/* Left Arrow Point cap */}
        <path d="M 0 30 L 25 0 L 25 60 Z" fill="url(#white-plastic-shade)" />
        
        {/* 3 Copper Arrowheads */}
        <path d="M 35 15 L 50 30 L 35 45 L 42 30 Z" fill="url(#copper-grad)" />
        <path d="M 60 15 L 75 30 L 60 45 L 67 30 Z" fill="url(#copper-grad)" />
        <path d="M 85 15 L 100 30 L 85 45 L 92 30 Z" fill="url(#copper-grad)" />

        {/* 3 Square Golden-framed Pyramids */}
        {/* Pyramid 1 */}
        <g transform="translate(130, 8)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#F8FAFC" stroke="url(#gold-grad)" strokeWidth="3" />
          {/* Pyramid facets */}
          <path d="M 22 22 L 0 0 L 44 0 Z" fill="url(#white-plastic-top)" opacity="0.9" />
          <path d="M 22 22 L 44 0 L 44 44 Z" fill="url(#white-plastic-shade)" />
          <path d="M 22 22 L 44 44 L 0 44 Z" fill="url(#white-plastic-dark)" />
          <path d="M 22 22 L 0 44 L 0 0 Z" fill="url(#white-plastic-shade)" />
        </g>
        {/* Pyramid 2 */}
        <g transform="translate(195, 8)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#F8FAFC" stroke="url(#gold-grad)" strokeWidth="3" />
          <path d="M 22 22 L 0 0 L 44 0 Z" fill="url(#white-plastic-top)" opacity="0.9" />
          <path d="M 22 22 L 44 0 L 44 44 Z" fill="url(#white-plastic-shade)" />
          <path d="M 22 22 L 44 44 L 0 44 Z" fill="url(#white-plastic-dark)" />
          <path d="M 22 22 L 0 44 L 0 0 Z" fill="url(#white-plastic-shade)" />
        </g>
        {/* Pyramid 3 */}
        <g transform="translate(260, 8)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#F8FAFC" stroke="url(#gold-grad)" strokeWidth="3" />
          <path d="M 22 22 L 0 0 L 44 0 Z" fill="url(#white-plastic-top)" opacity="0.9" />
          <path d="M 22 22 L 44 0 L 44 44 Z" fill="url(#white-plastic-shade)" />
          <path d="M 22 22 L 44 44 L 0 44 Z" fill="url(#white-plastic-dark)" />
          <path d="M 22 22 L 0 44 L 0 0 Z" fill="url(#white-plastic-shade)" />
        </g>
      </g>

      {/* Strip 2 (Bottom) */}
      <g transform="translate(30, 210)">
        {/* Main white plastic strip */}
        <rect x="0" y="0" width="340" height="60" rx="8" fill="url(#white-plastic-top)" filter="url(#element-shadow)" stroke="#E2E8F0" strokeWidth="1" />
        
        {/* Left Arrow Point cap */}
        <path d="M 0 30 L 25 0 L 25 60 Z" fill="url(#white-plastic-shade)" />
        
        {/* 3 Copper Arrowheads */}
        <path d="M 35 15 L 50 30 L 35 45 L 42 30 Z" fill="url(#copper-grad)" />
        <path d="M 60 15 L 75 30 L 60 45 L 67 30 Z" fill="url(#copper-grad)" />
        <path d="M 85 15 L 100 30 L 85 45 L 92 30 Z" fill="url(#copper-grad)" />

        {/* 3 Square Golden-framed Pyramids */}
        {/* Pyramid 1 */}
        <g transform="translate(130, 8)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#F8FAFC" stroke="url(#gold-grad)" strokeWidth="3" />
          <path d="M 22 22 L 0 0 L 44 0 Z" fill="url(#white-plastic-top)" opacity="0.9" />
          <path d="M 22 22 L 44 0 L 44 44 Z" fill="url(#white-plastic-shade)" />
          <path d="M 22 22 L 44 44 L 0 44 Z" fill="url(#white-plastic-dark)" />
          <path d="M 22 22 L 0 44 L 0 0 Z" fill="url(#white-plastic-shade)" />
        </g>
        {/* Pyramid 2 */}
        <g transform="translate(195, 8)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#F8FAFC" stroke="url(#gold-grad)" strokeWidth="3" />
          <path d="M 22 22 L 0 0 L 44 0 Z" fill="url(#white-plastic-top)" opacity="0.9" />
          <path d="M 22 22 L 44 0 L 44 44 Z" fill="url(#white-plastic-shade)" />
          <path d="M 22 22 L 44 44 L 0 44 Z" fill="url(#white-plastic-dark)" />
          <path d="M 22 22 L 0 44 L 0 0 Z" fill="url(#white-plastic-shade)" />
        </g>
        {/* Pyramid 3 */}
        <g transform="translate(260, 8)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#F8FAFC" stroke="url(#gold-grad)" strokeWidth="3" />
          <path d="M 22 22 L 0 0 L 44 0 Z" fill="url(#white-plastic-top)" opacity="0.9" />
          <path d="M 22 22 L 44 0 L 44 44 Z" fill="url(#white-plastic-shade)" />
          <path d="M 22 22 L 44 44 L 0 44 Z" fill="url(#white-plastic-dark)" />
          <path d="M 22 22 L 0 44 L 0 0 Z" fill="url(#white-plastic-shade)" />
        </g>
      </g>
    </svg>
  );

  // IMAGE 3: L-Force Corner Arrow (Virtual door correction L-beam with copper corners)
  const renderInstrument3 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Ground Shadow reflecting L-shape */}
      <path d="M 60 290 L 190 350 L 340 260 L 290 230 L 190 280 L 110 240 Z" fill="#000000" opacity="0.08" filter="url(#soft-shadow)" />

      {/* Main White L-Beam Structure */}
      {/* Tilted perspective */}
      <g transform="translate(10, -10)">
        {/* Outer 3D body outline */}
        <path d="M 80 260 L 200 320 L 320 220 L 270 190 L 180 250 L 110 215 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" />
        <path d="M 80 260 L 200 320 L 200 328 L 80 268 Z" fill="url(#white-plastic-dark)" />
        <path d="M 200 320 L 320 220 L 320 228 L 200 328 Z" fill="url(#white-plastic-dark)" />

        {/* Copper Triangles on the Ends */}
        {/* Left End */}
        <path d="M 85 255 L 105 235 L 100 260 Z" fill="url(#copper-grad)" />
        {/* Right End */}
        <path d="M 315 223 L 295 210 L 305 235 Z" fill="url(#copper-grad)" />
        {/* Center Corner Point inside */}
        <path d="M 195 305 L 180 295 L 185 315 Z" fill="url(#copper-grad)" />

        {/* Small White Pyramids along Left Arm */}
        {/* Py 1 */}
        <g transform="translate(115, 230)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#white-plastic-top)" />
        </g>
        {/* Py 2 */}
        <g transform="translate(140, 245)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#white-plastic-top)" />
        </g>
        {/* Py 3 */}
        <g transform="translate(165, 260)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#white-plastic-top)" />
        </g>

        {/* Small White Pyramids along Right Arm */}
        {/* Py 1 */}
        <g transform="translate(265, 195)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#white-plastic-top)" />
        </g>
        {/* Py 2 */}
        <g transform="translate(240, 215)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#white-plastic-top)" />
        </g>
        {/* Py 3 */}
        <g transform="translate(215, 235)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
          <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#white-plastic-top)" />
        </g>
      </g>
    </svg>
  );

  // IMAGE 4: Exploded Multichamber Booster Set (Vertical stacks: Lid, Cones Plate, Bottom Yantra base)
  const renderInstrument4 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Soft Bottom Shadow */}
      <ellipse cx="200" cy="365" rx="110" ry="15" fill="#0F172A" opacity="0.08" filter="url(#soft-shadow)" />

      {/* LAYER 3: Bottom Decal Yantra Plate */}
      <g transform="translate(0, 50)">
        <path d="M 100 290 L 200 325 L 300 290 L 200 255 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" />
        <path d="M 100 290 L 200 325 L 200 330 L 100 295 Z" fill="url(#white-plastic-dark)" />
        <path d="M 200 325 L 300 290 L 300 295 L 200 330 Z" fill="url(#white-plastic-dark)" />
        
        {/* Orange Circular/Octagonal Grid Decals on the Plate */}
        <ellipse cx="200" cy="290" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="160" cy="280" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="240" cy="280" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="200" cy="308" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="160" cy="298" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="240" cy="298" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="200" cy="272" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="160" cy="265" rx="10" ry="6" fill="url(#orange-grad)" />
        <ellipse cx="240" cy="265" rx="10" ry="6" fill="url(#orange-grad)" />
      </g>

      {/* Exploded alignment guide lines */}
      <line x1="100" y1="190" x2="100" y2="340" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <line x1="300" y1="190" x2="300" y2="340" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <line x1="200" y1="90" x2="200" y2="290" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

      {/* LAYER 2: Middle Multi-cone Pyramid Matrix Plate */}
      <g transform="translate(0, -30)">
        <path d="M 100 220 L 200 255 L 300 220 L 200 185 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" stroke="#E2E8F0" />
        {/* Multiple mini pyramids on it */}
        {/* Center Golden Cone */}
        <g transform="translate(190, 203)" filter="url(#glow-gold)">
          <path d="M 10 0 L 0 12 L 12 16 L 20 4 Z" fill="url(#gold-grad)" />
          <path d="M 10 0 L 12 16 L 20 4 Z" fill="url(#gold-light)" stroke="#FFF" strokeWidth="0.5" />
        </g>
        {/* Left white pyramids */}
        <g transform="translate(150, 205)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
        </g>
        {/* Right white pyramids */}
        <g transform="translate(230, 205)">
          <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#white-plastic-shade)" />
        </g>
      </g>

      {/* LAYER 1: Top White Pyramid Shell (Hovering) */}
      <g transform="translate(0, -110)">
        {/* Floating base */}
        <path d="M 100 180 L 200 215 L 300 180 L 200 145 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" />
        {/* Pyramid Sides */}
        <path d="M 200 60 L 100 180 L 200 215 Z" fill="url(#white-plastic-shade)" />
        <path d="M 200 60 L 300 180 L 200 215 Z" fill="url(#white-plastic-top)" />
        
        {/* Side cut-out revealing inner golden pyramid */}
        <path d="M 200 60 L 180 140 L 220 140 Z" fill="url(#gold-grad)" opacity="0.9" />
        
        {/* Gold side triangles */}
        <path d="M 200 145 L 140 185 L 190 200 Z" fill="url(#gold-grad)" />
        <path d="M 200 145 L 260 185 L 210 200 Z" fill="url(#gold-grad)" />
      </g>
    </svg>
  );

  // IMAGE 5: Aura Plate 9x9 (White plate with 3x3 grid of 9 orange octagons + copper triangles inside)
  const renderInstrument5 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Ground Shadow */}
      <ellipse cx="200" cy="305" rx="145" ry="35" fill="#000" opacity="0.08" filter="url(#soft-shadow)" />

      {/* Main Base Plate */}
      <g transform="translate(10, 10)">
        {/* White Square Board (Isometric perspective) */}
        <path d="M 60 250 L 200 295 L 340 250 L 200 205 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" />
        <path d="M 60 250 L 200 295 L 200 302 L 60 257 Z" fill="url(#white-plastic-dark)" />
        <path d="M 200 295 L 340 250 L 340 257 L 200 302 Z" fill="url(#white-plastic-dark)" />

        {/* 3x3 Grid of Orange Octagon Decals */}
        {/* Rows projected on the isometric plane */}
        
        {/* Row 1 (back) */}
        <g transform="translate(0,0)">
          {/* Back Left */}
          <path d="M 130 216 L 145 221 L 145 226 L 130 231 L 115 226 L 115 221 Z" fill="url(#orange-grad)" />
          {/* Back Center */}
          <path d="M 200 216 L 215 221 L 215 226 L 200 231 L 185 226 L 185 221 Z" fill="url(#orange-grad)" />
          {/* Back Right */}
          <path d="M 270 216 L 285 221 L 285 226 L 270 231 L 255 226 L 255 221 Z" fill="url(#orange-grad)" />
        </g>

        {/* Row 2 (middle) */}
        <g transform="translate(0,18)">
          {/* Mid Left */}
          <path d="M 120 232 L 138 238 L 138 245 L 120 251 L 102 245 L 102 238 Z" fill="url(#orange-grad)" />
          <polygon points="120,238 116,244 124,244" fill="url(#copper-light)" />
          {/* Mid Center */}
          <path d="M 200 232 L 218 238 L 218 245 L 200 251 L 182 245 L 182 238 Z" fill="url(#orange-grad)" />
          <polygon points="200,238 196,244 204,244" fill="url(#copper-light)" />
          {/* Mid Right */}
          <path d="M 280 232 L 298 238 L 298 245 L 280 251 L 262 245 L 262 238 Z" fill="url(#orange-grad)" />
          <polygon points="280,238 276,244 284,244" fill="url(#copper-light)" />
        </g>

        {/* Row 3 (front) */}
        <g transform="translate(0,36)">
          {/* Front Left */}
          <path d="M 110 248 L 130 255 L 130 263 L 110 270 L 90 263 L 90 255 Z" fill="url(#orange-grad)" />
          <polygon points="110,254 105,262 115,262" fill="url(#copper-grad)" />
          <polygon points="102,258 98,264 106,264" fill="url(#copper-grad)" />
          <polygon points="118,258 114,264 122,264" fill="url(#copper-grad)" />

          {/* Front Center */}
          <path d="M 200 248 L 220 255 L 220 263 L 200 270 L 180 263 L 180 255 Z" fill="url(#orange-grad)" />
          <polygon points="200,254 195,262 205,262" fill="url(#copper-grad)" />
          <polygon points="192,258 188,264 196,264" fill="url(#copper-grad)" />
          <polygon points="208,258 204,264 212,264" fill="url(#copper-grad)" />

          {/* Front Right */}
          <path d="M 290 248 L 310 255 L 310 263 L 290 270 L 270 263 L 270 255 Z" fill="url(#orange-grad)" />
          <polygon points="290,254 285,262 295,262" fill="url(#copper-grad)" />
          <polygon points="282,258 278,264 286,264" fill="url(#copper-grad)" />
          <polygon points="298,258 294,264 302,264" fill="url(#copper-grad)" />
        </g>
      </g>
    </svg>
  );

  // IMAGE 6: Pyra-Strip (Linear White bar with diagonal row of 9 copper/bronze pyramids)
  const renderInstrument6 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Ground Shadow representing diagonal strip */}
      <path d="M 60 300 L 330 110 L 350 130 L 80 320 Z" fill="#000" opacity="0.08" filter="url(#soft-shadow)" />

      {/* Diagonal White Strip */}
      <g transform="translate(10, 0)">
        <path d="M 50 310 L 310 110 L 340 135 L 80 335 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" stroke="#E2E8F0" />
        <path d="M 50 310 L 80 335 L 80 342 L 50 317 Z" fill="url(#white-plastic-dark)" />
        <path d="M 80 335 L 340 135 L 340 142 L 80 342 Z" fill="url(#white-plastic-dark)" />

        {/* 9 Copper/Bronze Pyramids Arranged Diagonally */}
        {/* We calculate 9 interpolated points between (75, 310) and (310, 130) */}
        {/* Point formula: P(i) = Start + (i/8)*(End - Start) */}
        {Array.from({ length: 9 }).map((_, i) => {
          const t = i / 8;
          const px = 75 + t * (235);
          const py = 310 - t * (175);
          return (
            <g key={i} transform={`translate(${px - 10}, ${py - 10})`}>
              {/* Mini copper pyramid */}
              <path d="M 10 0 L 0 10 L 12 14 L 20 4 Z" fill="url(#copper-grad)" />
              <path d="M 10 0 L 12 14 L 20 4 Z" fill="url(#copper-light)" stroke="#FFF" strokeWidth="0.5" />
            </g>
          );
        })}
      </g>
    </svg>
  );

  // IMAGE 7: Gold Supreme 9x9 Pyramid Set (Exploded Supreme Golden/Brass lid + white base of gold micro-pyramids)
  const renderInstrument7 = () => (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderDefs()}
      <rect width="400" height="400" rx="32" fill="#FFFFFF" />
      
      {/* Soft Ground Shadow */}
      <ellipse cx="200" cy="355" rx="120" ry="15" fill="#000" opacity="0.08" filter="url(#soft-shadow)" />

      {/* Exploded alignment guide lines */}
      <line x1="200" y1="90" x2="200" y2="280" stroke="#E6B800" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

      {/* BOTTOM OBJECT: White Tray with 9x9 micro golden pyramids */}
      <g transform="translate(0, 40)">
        <path d="M 90 260 L 200 300 L 310 260 L 200 220 Z" fill="url(#white-plastic-top)" filter="url(#element-shadow)" />
        <path d="M 90 260 L 200 300 L 200 306 L 90 266 Z" fill="url(#white-plastic-dark)" />
        <path d="M 200 300 L 310 260 L 310 266 L 200 306 Z" fill="url(#white-plastic-dark)" />

        {/* Shiny gold recessed grid plate */}
        <path d="M 110 255 L 200 288 L 290 255 L 200 223 Z" fill="url(#gold-grad)" />

        {/* Draw multiple gleaming gold dots representing micro pyramids */}
        {Array.from({ length: 5 }).map((_, r) => (
          <g key={r} transform={`translate(0, ${r * 8 - 16})`}>
            {Array.from({ length: 5 }).map((_, c) => {
              const x = 160 + c * 16 - r * 8;
              const y = 245 + r * 6 + c * 4;
              return (
                <circle key={c} cx={x} cy={y} r="2" fill="#FFE082" filter="url(#glow-gold)" />
              );
            })}
          </g>
        ))}
      </g>

      {/* TOP OBJECT: Gleaming Gold Supreme Pyramid Lid (Hovering) */}
      <g transform="translate(0, -70)">
        {/* Floating shadow projection */}
        <path d="M 90 190 L 200 230 L 310 190 L 200 150 Z" fill="#783F04" opacity="0.15" filter="url(#soft-shadow)" />

        {/* Base lip of the gold pyramid lid */}
        <path d="M 90 190 L 200 230 L 310 190 L 200 150 Z" fill="url(#gold-grad)" filter="url(#element-shadow)" />
        <path d="M 90 190 L 200 230 L 200 234 L 90 194 Z" fill="url(#gold-dark)" />
        <path d="M 200 230 L 310 190 L 310 194 L 200 234 Z" fill="url(#gold-dark)" />

        {/* Main Golden/Brass faces */}
        {/* Left shaded face */}
        <path d="M 200 50 L 93 186 L 200 226 Z" fill="url(#gold-dark)" />
        {/* Right gleaming face */}
        <path d="M 200 50 L 307 186 L 200 226 Z" fill="url(#gold-light)" />

        {/* Ridge detailing */}
        <line x1="200" y1="50" x2="200" y2="226" stroke="#FFF" strokeWidth="2.5" opacity="0.8" />
        <line x1="200" y1="50" x2="93" y2="186" stroke="#FFE082" strokeWidth="1.5" />
        <line x1="200" y1="50" x2="307" y2="186" stroke="#FFF" strokeWidth="1.5" />

        {/* Triangle accent grooves on faces (like original design) */}
        <polygon points="200,140 145,190 190,205" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
        <polygon points="200,140 255,190 210,205" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" />
      </g>
    </svg>
  );

  switch (id) {
    case 'instrument-svg-0':
      return renderInstrument0();
    case 'instrument-svg-1':
      return renderInstrument1();
    case 'instrument-svg-2':
      return renderInstrument2();
    case 'instrument-svg-3':
      return renderInstrument3();
    case 'instrument-svg-4':
      return renderInstrument4();
    case 'instrument-svg-5':
      return renderInstrument5();
    case 'instrument-svg-6':
      return renderInstrument6();
    case 'instrument-svg-7':
      return renderInstrument7();
    default:
      return (
        <div className="w-full h-full bg-gray-100 dark:bg-brand-blue-800 flex items-center justify-center text-gray-400">
          No Preview Available
        </div>
      );
  }
}
