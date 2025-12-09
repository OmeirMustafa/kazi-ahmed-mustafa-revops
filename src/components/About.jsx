import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#050505] border-y border-white/5">
            <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Profile/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] rounded-full"></div>
                    <img
                        src="/profile.jpg"
                        alt="Kazi Ahmed Mustafa - Revenue Architect"
                        width="800"
                        height="800"
                        loading="lazy"
                        className="relative z-10 w-full md:w-[80%] mx-auto rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-2xl"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4 block">My Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">From Circuit Boards <br />to Dashboards.</h2>
                    <div className="text-lg md:text-xl text-white/70 space-y-6 font-light leading-relaxed">
                        <p>
                            I didn't start in marketing. I started in Electrical Engineering (BSc).
                        </p>
                        <p>
                            I don't see sales as an art form—I see it as a circuit. If there is resistance, I reduce it. If there is a disconnect, I bridge it. I build revenue engines that don't just run—they hum.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
