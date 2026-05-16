import React from "react";
import residentialImg from "../../assets/images/residential_solar.avif";
import commercialImg from "../../assets/images/commercial_solar.avif";

export const Spaces = () => {
  return (
    <section className="bg-on-surface text-surface py-32 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Residential */}
          <div className="group">
            <div className="aspect-[16/9] bg-surface-container-high overflow-hidden mb-8">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                alt="Luxury contemporary residence with rooftop solar panels"
                src={residentialImg}
              />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest">
              Residential
            </h3>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-80 max-w-md">
              Solar and backup systems for homes that want better comfort,
              security, and everyday peace of mind.
            </p>
          </div>

          {/* Commercial */}
          <div className="group lg:mt-32">
            <div className="aspect-[16/9] bg-surface-container-high overflow-hidden mb-8">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                alt="Modern high-end office lobby with architectural lighting"
                src={commercialImg}
              />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest">
              Commercial
            </h3>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-80 max-w-md">
              Reliable power systems for offices, retail spaces, and commercial
              properties that need continuity and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
