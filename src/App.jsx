
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  Menu, X, ArrowRight, Network, Users, Settings, BarChart3,
  Mail, Phone, MapPin, Linkedin, Send, ArrowDown, Database,
  Zap, Globe, Layers, Cpu, Workflow
} from 'lucide-react';

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Methodology', to: 'process' },
    { name: 'Outcomes', to: 'work' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}
    >
      <div className="container flex justify-between items-center">
        <Link to="hero" smooth={true} duration={800} className="text-2xl font-bold cursor-pointer font-outfit tracking-tighter z-50">
          KAZI<span className="text-emerald-400">.</span>REVOPS
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} smooth={true} duration={800} offset={-70} className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm font-medium uppercase tracking-widest hover:text-emerald-400">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="contact" smooth={true} duration={800} className="btn btn-primary">
            Let's Talk <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white z-50 hover:text-emerald-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} smooth={true} duration={800} offset={-70} onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-emerald-400">
                  {link.name}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={800} onClick={() => setIsOpen(false)} className="btn btn-primary mt-4">
                Let's Talk
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#050505]/85 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-0"></div>

      <div className="container relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 bg-black/30 backdrop-blur-sm">
            Revenue Infrastructure Architect
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
          Stop Guessing. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Start Engineering</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Your Revenue.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="max-w-3xl mx-auto text-lg md:text-2xl text-white/70 mb-10 leading-relaxed font-light">
          Stop relying on founder-led sales and 'hustle.' I build the automated CRM infrastructure that allows B2B SaaS companies to scale pipeline without hiring more headcount.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="contact" smooth={true} duration={800} className="btn btn-primary px-8 py-4 text-lg">
            Consult With Me
          </Link>
          <Link to="work" smooth={true} duration={800} className="btn btn-outline px-8 py-4 text-lg">
            View Case Studies
          </Link>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link to="about" smooth={true} duration={800} className="cursor-pointer text-white/30 hover:text-emerald-400 transition-colors">
          <ArrowDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

// --- NEW COMPONENT: TRUST BAR ---
const TrustBar = () => {
  return (
    <section className="py-10 bg-[#050505] border-b border-white/5 relative z-20">
      <div className="container">
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-8">Trusted by Engineering-Led Teams At:</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl md:text-2xl font-bold text-white font-outfit tracking-tighter">APLOMBTECH</span>
          <span className="text-xl md:text-2xl font-bold text-white font-outfit tracking-tighter">UMA</span>
          <span className="text-xl md:text-2xl font-bold text-white font-outfit tracking-tighter">ISRA</span>
          <span className="text-xl md:text-2xl font-bold text-white font-outfit tracking-tighter">TECHFLOW</span>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section bg-[#050505]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Bio & Experience */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">The Bridge Between <br /> <span className="text-white/50">Engineering & Business</span></h2>

            <div className="text-white/70 text-lg space-y-6 mb-12 font-light leading-relaxed">
              <p>
                Your engineering team runs on logic and systems. Your sales team should, too.
              </p>
              <p>
                With a background in <strong>Electrical Engineering</strong>, I treat your revenue cycle like a circuit—identifying resistance, fixing broken connections, and optimizing for maximum throughput.
              </p>
              <p>
                I don't just manage operations; I engineer them for predictability.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8 border-l border-white/10 pl-8 relative">
              {[
                { role: "Head of Marketing Operations", company: "RCS", year: "Present" },
                { role: "Business Development Manager", company: "Tech Giant Corp", year: "2021-2023" },
                { role: "CRM Implementation Specialist", company: "SaaS Scaleups", year: "2019-2021" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500"></span>
                  <h4 className="text-xl font-bold text-white">{item.role}</h4>
                  <p className="text-emerald-400 text-sm font-semibold mb-1">{item.company}</p>
                  <span className="text-white/30 text-xs tracking-wider">{item.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Sticky Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative group">
              {/* Glass Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative p-2 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
              >
                <img
                  src="/profile.jpg"
                  alt="Kazi Ahmed Mustafa"
                  className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover shadow-2xl"
                  loading="lazy"
                />

                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Status</p>
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for new projects
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- NEW COMPONENT: TECH STACK (Inside About) --- */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <h3 className="text-center text-xl font-bold mb-8 text-white/80">Built on Modern Revenue Architecture</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { name: "HubSpot", icon: <Database /> },
              { name: "Apollo.io", icon: <Send /> },
              { name: "LinkedIn Sales Nav", icon: <Linkedin /> },
              { name: "Make.com", icon: <Workflow /> },
              { name: "Zapier", icon: <Zap /> },
              { name: "Salesforce", icon: <Globe /> }
            ].map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 min-w-[120px] hover:border-emerald-500/30 transition-colors cursor-default group">
                <div className="text-white/50 group-hover:text-emerald-400 transition-colors">
                  {tool.icon}
                </div>
                <span className="text-sm font-bold text-white/70">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Network className="w-10 h-10 text-emerald-400" />, title: "Revenue Infrastructure", desc: "Full-stack setup of your revenue engine. CRM architecture, data pipelines, and tool stack validation." },
    { icon: <Users className="w-10 h-10 text-emerald-400" />, title: "Fractional RevOps Leader", desc: "Acting as your part-time Head of Operations to audit systems and manage SDR data flow." },
    { icon: <Settings className="w-10 h-10 text-emerald-400" />, title: "Tech Lead Gen Systems", desc: "Engineering lead sources. Web scrapers, enrichment workflows, and validation waterfalls." },
    { icon: <BarChart3 className="w-10 h-10 text-emerald-400" />, title: "Workflow Optimization", desc: "Removing friction. Mapping customer journeys and automating manual touchpoints via Zapier/Make." },
  ];

  return (
    <section id="services" className="section bg-[#080808]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for Growth</h2>
          <p className="text-white/60 text-lg">I don't offer generic consulting. I deploy high-leverage systems that become permanent assets.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all group backdrop-blur-sm">
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: PROCESS ENGINE ---
const ProcessEngine = () => {
  return (
    <section id="process" className="section bg-[#050505]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The FlowState Methodology</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-16 right-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-0"></div>

          {[
            { title: "Audit (The Circuit Break)", desc: "Diagnostic of your current commercial stack and bottlenecks.", icon: <Cpu /> },
            { title: "Build (The Rewiring)", desc: "Architecture and implementation of CRM workflows and automations.", icon: <Layers /> },
            { title: "Run (The Voltage)", desc: "Continuous optimization and high-velocity lead generation.", icon: <Zap /> },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-shadow duration-300">
                <div className="text-emerald-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-white/60 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    { title: "B2B SaaS Pipeline Rebuild", category: "Revenue Infrastructure", result: "Reduced Cycle by 14 Days", desc: "Eliminated manual data entry, reducing sales cycle by 14 days." },
    { title: "Agency Outbound System", category: "Lead Generation", result: "150+ Qualified Meetings", desc: "Built a multi-channel outbound system using Apollo.ai & LinkedIn Sales Nav." },
    { title: "Global Tender Workflow", category: "Process Optimization", result: "20+ Hours Saved/Week", desc: "Automated tender tracking system, saving 20+ hours of executive time per week." }
  ];

  return (
    <section id="work" className="section bg-[#080808]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold">Engineered Outcomes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all hover:bg-white/10 group cursor-default">
              <div className="flex justify-between items-start mb-6">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider py-1 px-3 bg-emerald-500/10 rounded-full">{item.category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6">{item.result}</div>
              <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-[#050505] to-black">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale Your<br />Revenue Engine?</h2>
            <p className="text-white/60 mb-10 text-lg">Whether you need a full audit or a specific system build, I'm ready to engineer the solution.</p>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "Email Me", val: "ask.ahmedmustafa@gmail.com", href: "mailto:ask.ahmedmustafa@gmail.com", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                { icon: <Phone />, label: "Call Me", val: "+88 01728407485", href: "tel:+8801728407485", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: <MapPin />, label: "Location", val: "Bashundhara R/A, Dhaka", href: "#", color: "text-purple-400", bg: "bg-purple-500/10" },
              ].map((contact, i) => (
                <a key={i} href={contact.href} className="flex items-center gap-6 text-white hover:text-emerald-400 transition-colors bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 group">
                  <div className={`w-12 h-12 rounded-full ${contact.bg} flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-wider">{contact.label}</p>
                    <p className="text-lg font-medium">{contact.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <a href="https://linkedin.com/in/kazi-ahmed-mustafa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-[#0077b5] py-3 px-6 rounded-lg font-bold hover:bg-[#005a8c] transition-colors shadow-lg shadow-blue-900/20">
                <Linkedin size={20} /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Name", type: "text", placeholder: "John Doe" },
                { label: "Email", type: "email", placeholder: "john@company.com" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-bold text-white/70 mb-2 uppercase tracking-wide">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-white/70 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows="4" placeholder="Tell me about your revenue goals..." className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all duration-300"></textarea>
              </div>

              <button type="submit" className="w-full btn btn-primary py-4 justify-center text-lg tracking-wide">
                Send Request <Send size={18} />
              </button>
              <p className="text-center text-white/30 text-xs mt-4">*This form is for demonstration.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER COMPONENT ---
const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold font-outfit tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              KAZI<span className="text-emerald-400">.</span>REVOPS
            </h4>
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col space-y-3">
            <h5 className="font-bold text-white mb-2">Navigation</h5>
            {['Home', 'About', 'Services', 'Case Studies'].map((item) => (
              <Link key={item} to={item === 'Home' ? 'hero' : item === 'Case Studies' ? 'work' : item === 'Services' ? 'services' : 'about'} smooth={true} duration={800} className="text-white/40 hover:text-emerald-400 transition-colors text-sm cursor-pointer w-fit">
                {item}
              </Link>
            ))}
          </div>

          {/* Col 3: Connect */}
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-white mb-2">Connect</h5>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/kazi-ahmed-mustafa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-emerald-500 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ask.ahmedmustafa@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-emerald-500 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-white/20 text-xs">
          <p>Designed for Revenue Engineering.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Systems Architect</span>
            <span>RevOps Leader</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP ---

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden w-full selection:bg-emerald-500/30 selection:text-emerald-100">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <ProcessEngine />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
