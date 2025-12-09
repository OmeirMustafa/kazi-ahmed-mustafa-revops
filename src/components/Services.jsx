import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, Shield, Rocket, X } from 'lucide-react';

const ServiceCard = ({ product, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 group overflow-hidden ${product.highlight ? 'bg-white/5 border-neon-blue/50 shadow-[0_0_40px_rgba(57,169,255,0.1)]' : 'bg-transparent border-white/10 hover:border-white/20'}`}
        >
            <div>
                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit border border-white/5 group-hover:border-neon-blue/30 transition-colors">
                    {product.icon}
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">{product.subtitle}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{product.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{product.desc}</p>

                <div className="space-y-3 mb-6">
                    {product.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
                            <span className="text-sm text-white/80">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-white/10 space-y-3 pb-6">
                                {product.details.map((detail, idx) => (
                                    <div key={idx} className="text-sm text-white/70 pl-2 border-l-2 border-neon-blue/30">
                                        {/* Parse Bold text if present - simple check for now */}
                                        {detail.includes('**') ? (
                                            <span dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                                        ) : (
                                            detail
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`inline-flex items-center gap-2 font-bold cursor-pointer transition-colors py-2 ${product.highlight ? 'text-neon-blue hover:text-white' : 'text-white hover:text-neon-blue'}`}
            >
                {isExpanded ? (
                    <>Close Details <X className="w-4 h-4" /></>
                ) : (
                    <>View Details <ArrowRight className="w-4 h-4" /></>
                )}
            </button>
        </motion.div>
    );
};

const Services = () => {
    const products = [
        {
            title: "Revenue Infrastructure Build",
            icon: <Database className="w-10 h-10 text-neon-blue" />,
            subtitle: "The Flagship",
            desc: "One-time architectural overhaul. I migrate, clean, and architect your CRM to be the single source of truth.",
            deliverables: ["Tech Stack Audit", "CRM Architecture", "Data Enrichment Layers"],
            details: [
                "CRM Architecture & Cleaning",
                "Data Enrichment Setup (Apollo/Clay)",
                "Automation Workflow Mapping",
                "**Est. Timeline:** 2-4 Weeks"
            ],
            highlight: false
        },
        {
            title: "Fractional RevOps Leadership",
            icon: <Shield className="w-10 h-10 text-neon-blue" />,
            subtitle: "The Retainer",
            desc: "Senior leadership without the headcount. I act as your Head of Ops to optimize workflows and align teams weekly.",
            deliverables: ["Pipeline Reviews", "Strategy Alignment", "Continuous Optimization"],
            details: [
                "Weekly Pipeline Reviews",
                "Sales/Marketing Alignment",
                "Tech Stack Management",
                "**Commitment:** Monthly Retainer"
            ],
            highlight: true
        },
        {
            title: "Technical Lead Gen",
            icon: <Rocket className="w-10 h-10 text-neon-blue" />,
            subtitle: "The Fuel",
            desc: "High-intent outbound systems. Waterfall enrichment and signal-based scraping to land in the primary inbox.",
            deliverables: ["ICP Development", "Cold Email Infrastructure", "Lead List Building"],
            details: [
                "ICP Development",
                "Cold Email Infrastructure (DNS/DMARC)",
                "1000+ Verified Leads/Mo",
                "**Model:** Pay Per Performance Option"
            ],
            highlight: false
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#080808]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">What I Do</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Strategic Revenue Products</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {products.map((product, i) => (
                        <ServiceCard key={i} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
