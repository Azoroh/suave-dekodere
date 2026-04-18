import React from 'react';

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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jGHfyKowjQllqtU8X3RkViFwpTipn5VQJBwuwJDD6qOSBmOAE2FYwRq6FjdMpDL07a9F1MAhb7JZBu90eL5etQjZX9e7x4vkz1ez6XEoFY115XzKSHcnYDgZdgv16a_1EJow_KPlu4sjSa_oKQNrK_zptqLFZSCjC2MMMZGfdGgRsWUQWQ2zLuXZDDtRpLME2A2grfxz3wtr138OEmsC8rnhtIdLlDSi8e538qDe8MEbU3Np4YQGnY4UEVYZ8-4qaVT8pmvO34k"
              />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest">Residential</h3>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-80 max-w-md">
              Solar and backup systems for homes that want better comfort, security, and everyday peace of mind.
            </p>
          </div>

          {/* Commercial */}
          <div className="group lg:mt-32">
            <div className="aspect-[16/9] bg-surface-container-high overflow-hidden mb-8">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                alt="Modern high-end office lobby with architectural lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQNe7695XQ5l6QZB7ZD4OJCG24ry0LbfCO7YI99NuGLcMmfVB77d5pg0yBDM-eaM0olT5y07_XdyfoLcjPe0LLFXx6pP5NyHeeYgAuKPYk80CNqquh35Dx0F5anOUwpLAwTKssIqC3QYgLSYQ_8ooPqlhCj4vQEK0lI4golAdgLJCKILaWU1cQQtgzYQyEL0kpLBU2W8kU4BlQKriOh833TM1aTK3Gyd-yP2xHQA9FP3S01JfnwzTz2Q6uJa2SvQ3dO9V_knso8x0"
              />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest">Commercial</h3>
            <p className="font-body text-lg text-surface-variant leading-relaxed opacity-80 max-w-md">
              Reliable power systems for offices, retail spaces, and commercial properties that need continuity and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
