import React from 'react';

export const SectionLabel = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#4b6367] whitespace-nowrap">
        {label}
      </span>
      <div className="h-[1px] w-12 bg-[#4b6367]/20 after:content-[''] after:block after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:to-transparent" />
    </div>
  );
};
