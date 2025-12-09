import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden">
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
                        Let’s Architect Your <br />
                        <span className="text-neon-blue">Revenue Engine</span>
                    </h2>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary-neon text-xl px-10 py-5 shadow-[0_0_50px_rgba(57,169,255,0.3)] hover:shadow-[0_0_80px_rgba(57,169,255,0.5)]"
                        >
                            Request a Revenue Architecture Audit
                        </button>
                    </motion.div>

                    <div className="mt-16 flex justify-center gap-8">
                        <a href="https://linkedin.com/in/kazi-ahmed-mustafa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-neon-blue transition-colors">
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-white/50 hover:text-neon-blue transition-colors">
                            <Mail className="w-5 h-5" /> Email
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
