import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Solar Installations",
  "Backup Power Solutions",
  "Smart Home Systems",
  "CCTV and Security",
  "Electrical Work",
  "Interior Finishing",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  serviceNeeded: "",
  message: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (submitted) {
      document
        .getElementById("inquiry")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  const canSubmit =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "" &&
    form.projectType !== "" &&
    form.serviceNeeded !== "";

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = "Full name is required.";
    if (!data.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document
        .getElementById(`field-${firstKey}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSending(true);

    // Clean phone number for WhatsApp (remove everything except digits)
    const cleanPhone = form.phone.replace(/\D/g, "");
    const whatsappLink = `https://wa.me/${cleanPhone}`;

    try {
      await emailjs.send(
        "service_rygbqpo",
        "template_7t1wynn",
        {
          to_email: "robinsonsuave@gmail.com",
          bcc_email: "cjaylambs2@gmail.com",

          name: form.name,
          email: form.email,
          phone: form.phone,
          whatsappLink: whatsappLink,
          // Sending multiple versions to ensure match with template variables
          projectType: form.projectType,
          "project-type": form.projectType,
          project_type: form.projectType,

          serviceNeeded: form.serviceNeeded,
          "service-needed": form.serviceNeeded,
          service_needed: form.serviceNeeded,

          message: form.message || "No additional requirements provided.",
          title: `New Inquiry from ${form.name}`,
        },
        "mm7MGxktr42JEUDlp",
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({
        submit:
          "Failed to send inquiry. Please try again or contact us directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const fieldClass = "micro-form-field";
  const labelClass =
    "micro-form-label font-label text-[10px] uppercase tracking-widest text-on-surface/50 mb-2 block";
  const inputClass = (name) =>
    `micro-form-control w-full bg-transparent border-0 border-b py-3 px-0 focus:ring-0 font-body text-lg placeholder:text-on-surface/20 outline-none ${
      errors[name]
        ? "border-error bg-error/5 focus:border-error"
        : "border-outline-variant/30 focus:border-secondary"
    }`;
  const errorClass = "micro-form-error font-label text-[10px] text-error mt-2";

  if (submitted) {
    return (
      <section id="inquiry" className="bg-surface-container py-24 md:py-40">
        <div className="px-6 md:px-16 max-w-[1440px] mx-auto flex flex-col items-center text-center gap-8 py-16">
          <span className="material-symbols-outlined text-secondary text-6xl">
            check_circle
          </span>
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Inquiry Received
          </h2>
          <p className="font-body text-xl text-on-surface/70 max-w-md leading-relaxed">
            Thank you, <strong>{form.name}</strong>. We've received your inquiry
            and will be in touch shortly.
          </p>
          <button
            onClick={() => {
              setForm(initialForm);
              setErrors({});
              setSubmitted(false);
            }}
            className="micro-text-link font-label text-xs uppercase tracking-widest text-secondary border-b border-secondary/40 pb-1 hover:border-secondary transition-all"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="bg-surface-container py-24 md:py-40">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Form */}
        <div className="lg:col-span-7">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
              Start Your Inquiry
            </h2>
            <p className="font-body text-lg text-on-surface/70">
              Share a few details about your project and we will help you take
              the next step.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-12">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div id="field-name" className={fieldClass}>
                <label className={labelClass}>
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  placeholder="Your Name"
                  type="text"
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>
              <div id="field-phone" className={fieldClass}>
                <label className={labelClass}>
                  Phone Number <span className="text-error">*</span>
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                  placeholder="+234"
                  type="tel"
                />
              </div>
            </div>

            {/* Email */}
            <div id="field-email" className={fieldClass}>
              <label className={labelClass}>
                Email Address <span className="text-error">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
                placeholder="email@address.com"
                type="email"
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            {/* Project Type + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className={fieldClass}>
                <label className={labelClass}>
                  Type of Project <span className="text-error">*</span>
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={inputClass("projectType")}
                >
                  <option value="">Select type…</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Service Needed <span className="text-error">*</span>
                </label>
                <select
                  name="serviceNeeded"
                  value={form.serviceNeeded}
                  onChange={handleChange}
                  className={inputClass("serviceNeeded")}
                >
                  <option value="">Select service…</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className={fieldClass}>
              <label className={labelClass}>Tell Us About Your Space</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass("message")} resize-none`}
                placeholder="Briefly describe your requirements..."
                rows={4}
              />
            </div>

            {errors.submit && (
              <p className="micro-form-error font-label text-xs text-error mb-4 bg-error/10 p-4">
                {errors.submit}
              </p>
            )}

            <button
              type="submit"
              disabled={!canSubmit || isSending}
              aria-busy={isSending}
              className={`font-label text-xs uppercase tracking-[0.2em] px-12 py-5 transition-all inline-flex items-center justify-center gap-3 min-w-[220px] ${
                canSubmit && !isSending
                  ? "micro-button bg-[#2C2C2C] hover:bg-black text-white cursor-pointer"
                  : isSending
                    ? "bg-[#2C2C2C] text-white cursor-wait"
                    : "bg-on-surface/10 text-on-surface/30 cursor-not-allowed"
              }`}
            >
              {isSending && (
                <span className="micro-loading-spinner" aria-hidden="true" />
              )}
              {isSending ? "Sending Inquiry" : "Submit Inquiry"}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-16">
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-secondary mb-10">
              What Can We Help With?
            </h4>
            <ul className="space-y-8">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-6 group">
                  <span className="w-10 h-[1px] bg-outline-variant/50 group-hover:w-16 transition-all duration-500" />
                  <span className="font-headline font-semibold text-lg">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dékódèrè quote */}
          <div className="relative p-12 bg-surface-container-lowest flex gap-8">
            <div className="w-[2px] shrink-0 self-stretch bg-tertiary-fixed" />
            <div>
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary mb-3 block">
                The Dékódèrè Touch
              </span>
              <p className="font-body text-lg italic text-on-surface/80 leading-relaxed">
                "Every technical solution is integrated with our signature
                interior soul, ensuring your home is both smart and soulful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
