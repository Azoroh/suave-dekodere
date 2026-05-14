import React from 'react';

const scrollToForm = (e) => {
  e.preventDefault();
  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const methods = [
  {
    icon: 'calendar_today',
    title: 'Book a Consultation',
    body: 'Start with a conversation about your space, your power needs, and the kind of support you need.',
    linkLabel: 'Schedule Now →',
    href: '#inquiry',
    isScroll: true,
    bg: 'bg-surface-container-low',
  },
  {
    icon: 'chat_bubble_outline',
    title: 'Call or WhatsApp',
    body: 'Speak to our team directly for faster inquiries and project discussions.',
    linkLabel: '+234 907 425 2223',
    href: 'https://wa.me/2349074252223',
    bg: 'bg-surface-container',
  },
  {
    icon: 'mail_outline',
    title: 'Email Us',
    body: 'Send project details, questions, or service requests and we will respond as soon as possible.',
    linkLabel: 'hello@suave.com',
    href: 'mailto:hello@suave.com',
    bg: 'bg-surface-container-high',
  },
];

export const ContactMethods = () => {
  return (
    <section className="px-6 md:px-16 mb-24 md:mb-40 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
        {methods.map(({ icon, title, body, linkLabel, href, bg, isScroll }) => (
          <div key={title} className={`micro-service-card p-10 ${bg} group`}>
            <span className="material-symbols-outlined text-secondary text-3xl mb-8 block">{icon}</span>
            <h3 className="font-headline font-bold text-xl mb-4">{title}</h3>
            <p className="font-body text-on-surface/70 leading-relaxed mb-8">{body}</p>
            {isScroll ? (
              <button
                onClick={scrollToForm}
                className="micro-text-link font-label text-xs uppercase tracking-widest text-primary font-bold group-hover:text-secondary transition-colors"
              >
                {linkLabel}
              </button>
            ) : (
              <a
                href={href}
                className="micro-text-link font-label text-xs uppercase tracking-widest text-primary font-bold group-hover:text-secondary transition-colors"
              >
                {linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
