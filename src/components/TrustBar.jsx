import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
    const clients = [
        "UMA",
        "ISRA",
        "AplombTech",
        "Amity College",
        "IFIA",
        "APSCL"
    ];

    return (
        <section className="py-10 bg-[#050505] border-b border-white/5">
            <div className="container px-4">
                <p className="text-center text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-8">
                    Trusted by Forward-Thinking Organizations
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl md:text-2xl font-display font-bold text-white/40 hover:text-white transition-colors cursor-default"
                        >
                            {client}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
