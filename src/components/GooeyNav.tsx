'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: NavItem[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    setActiveIndex(index);
    const href = items[index].href;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-lg">
      <nav className="relative flex items-center">
        <ul className="flex gap-1 list-none p-0 m-0 relative z-10">
          {items.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative z-10 block px-4 py-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeIndex === index 
                    ? 'text-white drop-shadow-[0_0_8px_rgba(0,209,209,0.8)]' 
                    : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(0,209,209,0.5)]'
                }`}
              >
                {item.label}
              </a>
              {activeIndex === index && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-[#00d1d1] rounded-full z-0 shadow-[0_0_15px_rgba(0,209,209,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;
