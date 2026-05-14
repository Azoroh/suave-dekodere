import React from 'react';

export const CoreInfrastructure = () => {
  return (
    <section id="technical-excellence" className="bg-surface-container-low py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-24">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-secondary mb-4 block">
              Core Infrastructure
            </span>
            <h2 className="font-headline text-4xl md:text-[2.75rem] font-bold text-on-surface">
              Suave Technical Excellence
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24">
          {/* Service 1: Solar */}
          <div className="micro-service-card group p-4 -m-4">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Contemporary solar panel installation" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALvnIqqhC3oKbU77mOwfz-5D59ID3-5pmoza3UuPqcoR_pM2amLfV0NB5F7Nts6Pba1AHpuXNeow8HlW75wWZ2VC82vuscZMxcDyFOAovdMFvY9-WRkGu2JLwjKKs3Sxj3hV327Og9GIwc-IbETx_E56vpso5wE35mKplFGGzGm2plANq1_7k7PxYpMSTRD5L7728pRxAGTGJj-0h-noWS5279l2eHlrScZ01onge2MjM6e1-UMfKs_87MGncvVFrBmXEd-q7ip3Y" 
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">light_mode</span>
              Solar Installations
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Reliable solar systems designed for homes, offices, and commercial spaces that need efficient, long-term power support.
            </p>
          </div>
          
          {/* Service 2: Backup Power */}
          <div className="micro-service-card group p-4 -m-4 md:mt-12">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Industrial power backup systems" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcaW6LUJsQYz3RDpptFWPyEzQlOPPe3JXYb79t17ppwjcl2PWNj0hFfWdTtyN3_jT6mKmZGNlZJPxIQmYzvzkOwt3GQV3Qe-7jIF-EzXJlw3ApQM-dal_d35nv1giEuPb65KqsTj7032Zwd-RbcaleRrxdeQ0L6vdlZsPM6g92qm_GrINsK0ojNIffinW0aPLoreuVIgBelUlEjmEgYNOuh2LPG8oq-MprCFGrr56mA0Z9P4xMF8hNhGoYWhd36Ej1msGfOjwLJsI" 
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">battery_charging_full</span>
              Backup Power Solutions
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Power systems built to help daily life and business operations continue without unnecessary interruption.
            </p>
          </div>
          
          {/* Service 3: Smart Home */}
          <div className="micro-service-card group p-4 -m-4">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="High-end smart home touch interface" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM3VNXVufC7deEj9jC178ENYmENKXpzBuOd5DDopH0sybk9EzhBfZEnXGibHdS1dFUeecBLiP-cQbV4P5nNXX1RX3jHdxlwEPZ55pDZIFR4XP6jXBl2Gj1sAZF8Q2KOyV1Up9v6WbN7SXTXt0irarZTkuCn_skcmBkFShTT8_4XV8uN8XUeloHkwKysmhY9sqYzz_drCW5LQoY4LlAQYi0iAIHtw4O0f8WvfeM8OeQR0WiUtMb4Ic7EBy6-FeGfqobp5v9swHprn0" 
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">settings_remote</span>
              Smart Home Automation
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Integrated control for lighting, access, comfort, and everyday convenience.
            </p>
          </div>
          
          {/* Service 4: CCTV */}
          <div className="micro-service-card group p-4 -m-4">
            <div className="mb-8 overflow-hidden aspect-[16/9] w-full bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Minimalist modern security camera" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0_L33QgTWMPOZmKhdCi1GbEy9OV1KsGr1xu9HYLNGLxOueiy_SNkmkXfoaV0gQWU4l6Q14hLBx4oE5uKIQrQjd8A_wMKRCE0pAhjygs53m_JrTaKfnQ99rR-4FwKXRgZOxJoLnJlKDu5n9tU4Au7q0oL491cqiob0QEVAEXJNnfzf-1VFxZF8k72WOnva-7kR1cvbscCvihzFsLKP7v74hnmsTkJfjIpwEmMpgSi1Px5wPJ2u5uZ63S5qc52DNdMDwlbaJwVMCJU" 
              />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-outline font-light">videocam</span>
              CCTV and Security Systems
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Modern surveillance and monitoring solutions for better visibility and peace of mind.
            </p>
          </div>
          
          {/* Service 5: Electrical */}
          <div className="micro-service-card group p-4 -m-4 md:col-span-2">
            <div className="mb-8 overflow-hidden aspect-[21/9] w-full bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Close-up of professional electrical blueprint and tools" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJKjmAfBOW8Ko46SwWRKknxgEGteBzJA0bOr2UV_oQTyygD5sZXQ9-APLIflOpqZzdbBG35TGxJotnQ4MTC2-ENlY57OIMlUaVAPMURLM0RyxUxg69VkKg2OgNm0FzU03CeIarqKcnyXXGKZaOo7koDzk2yVVBbq-37eTtAjAESvXkd7xzlgmrUryNie7MYK3s9T5qPIPq8u57JjvZnDsyTtygAHvOb-QAkFY-zd1l6G-j2Wk7QInb3s79ylNsgzyIkY-alQLDUcg" 
              />
            </div>
            <div className="max-w-md">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-outline font-light">electrical_services</span>
                Electrical Engineering
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Professional electrical planning and installation for high-performance residential and commercial spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
