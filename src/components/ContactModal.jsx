import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, X, ArrowRight } from 'lucide-react';

const ContactModal = ({ isOpen, onClose, email = "ask.ahmedmustafa@gmail.com", subject = "Revenue Architecture Audit Request" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-950 border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(57,169,255,0.1)]"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="text-center mb-8">
                                <span className="text-neon-blue font-mono text-xs tracking-widest uppercase mb-2 block">Let's Connect</span>
                                <h3 className="text-3xl font-display font-bold text-white">Start Your Audit</h3>
                                <p className="text-white/60 text-sm mt-2">Choose your preferred way to connect.</p>
                            </div>

                            <div className="space-y-3">
                                {/* Option A: Gmail */}
                                <a
                                    href={gmailUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-blue/30 rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-bold">Open in Gmail</div>
                                            <div className="text-white/40 text-xs">Recommended for Desktop</div>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                                </a>

                                {/* Option B: Default App */}
                                <a
                                    href={mailtoUrl}
                                    className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-blue/30 rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-bold">Default Mail App</div>
                                            <div className="text-white/40 text-xs">Best for Mac / iOS</div>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                                </a>

                                {/* Option C: Copy */}
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-blue/30 rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                                            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-bold">{copied ? "Copied!" : "Copy Email Address"}</div>
                                            <div className="text-white/40 text-xs">{email}</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
