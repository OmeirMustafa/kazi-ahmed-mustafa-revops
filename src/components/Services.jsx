import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Anchor, Rocket } from 'lucide-react';
import { Link } from 'react-scroll';

const Services = () => {
    const products = [
        {
            title: "Revenue Infrastructure Build",
            icon: <Box className="w-10 h-10 text-neon-blue" />,
            subtitle: "The Flagship",
            desc: "A one-time architectural overhaul. We migrate, clean, and architect your CRM (HubSpot/Salesforce) to be the single source of truth.",
            deliverables: ["Tech Stack Audit", "CRM Architecture", "Data Enrichment Layers"],
            highlight: false
        },
        {
            title: "Fractional RevOps Leadership",
            icon: <Anchor className="w-10 h-10 text-neon-blue" />,
            subtitle: "The Retainer",
            desc: "Senior leadership without the headcount. I act as your Head of Ops to optimize workflows and align Sales & Marketing weekly.",
            deliverables: ["Pipeline Reviews", "Strategy Alignment", "Continuous Optimization"],
            highlight: true
        },
        {
            title: "Technical Lead Gen",
            icon: <Rocket className="w-10 h-10 text-neon-blue" />,
            subtitle: "The Fuel",
            desc: "High-intent outbound systems. We use waterfall enrichment and signal-based scraping to land in the primary inbox.",
            deliverables: ["ICP Development", "Cold Email Infrastructure", "Lead List Building"],
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 group ${product.highlight ? 'bg-white/5 border-neon-blue/50 shadow-[0_0_40px_rgba(57,169,255,0.1)]' : 'bg-transparent border-white/10 hover:border-white/20'}`}
                        >
                            <div className="mb-8">
                                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit border border-white/5 group-hover:border-neon-blue/30 transition-colors">
                                    {product.icon}
                                </div>
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">{product.subtitle}</span>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">{product.title}</h3>
                                <p className="text-white/60 leading-relaxed mb-6">{product.desc}</p>

                                <div className="space-y-3">
                                    {product.deliverables.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
                                            <span className="text-sm text-white/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link to="contact" smooth={true} duration={800} className={`inline-flex items-center gap-2 font-bold cursor-pointer transition-colors py-2 ${product.highlight ? 'text-neon-blue hover:text-white' : 'text-white hover:text-neon-blue'}`}>
                                View Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
