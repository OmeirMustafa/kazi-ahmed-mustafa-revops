import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent opacity-50"></div>

            {/* 3D Grid/System Visual Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

                {/* Left: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
                        I Design Revenue <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white/80">Systems That Scale</span> <br />
                        Without Chaos
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-light leading-relaxed">
                        Fractional RevOps + Revenue Architecture for teams that want predictable growth, clean data, automated processes, and zero operational bottlenecks.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary-neon group relative overflow-hidden"
                        >
                            <span className="relative z-10 font-bold text-black group-hover:text-black">Request a Revenue Architecture Audit</span>
                            <ArrowRight className="inline-block ml-2 w-5 h-5 text-black group-hover:translate-x-1 transition-transform relative z-10" />
                        </button>
                        <Link to="process" smooth={true} duration={800} offset={-70} className="btn-secondary-neon z-20 cursor-pointer">
                            See How I Work
                        </Link>
                    </div>
                </motion.div>

                {/* Right: 3D Holographic Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Central Core */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-neon-blue/30 absolute border-dashed"
                    ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-60 h-60 md:w-96 md:h-96 rounded-full border border-white/10 absolute"
                    ></motion.div>

                    {/* Nodes */}
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-neon-blue/10 backdrop-blur-md rounded-xl border border-neon-blue/50 flex items-center justify-center shadow-[0_0_30px_rgba(57,169,255,0.3)]">
                            <div className="w-4 h-4 bg-neon-blue rounded-full animate-pulse"></div>
                        </div>
                        {/* Orbiting Elements would go here for complex 3D effect */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
