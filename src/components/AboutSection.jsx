import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <div className="about" style={{ background: 'var(--grad-organic)', overflow: 'hidden' }}>
            <div className="container">
                <div className="asymmetric-layout">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                        className="organic-blob" 
                        style={{ 
                            backgroundImage: 'url(/img/about.jpg)', 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center', 
                            height: '600px',
                            width: '100%'
                        }}
                    >
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="about-content"
                    >
                        <div className="section-header" style={{ textAlign: 'left', marginLeft: '0' }}>
                            <p>Human Rights Alliance</p>
                            <h2>Standing For Justice and Equality</h2>
                        </div>
                        <motion.div 
                            layout
                            className="glass-surface"
                            style={{ padding: '40px', marginTop: '30px' }}
                        >
                            <ul className="nav nav-pills mb-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                <li className="nav-item">
                                    <button className="nav-link active" data-toggle="pill" href="#about-mission" style={{ background: 'none', border: 'none', color: 'inherit', fontWeight: '700', padding: '10px 20px' }}>Our Mission</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-toggle="pill" href="#about-vision" style={{ background: 'none', border: 'none', color: 'inherit', fontWeight: '700', padding: '10px 20px' }}>Our Vision</button>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <motion.div layout id="about-mission" className="tab-pane active">
                                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--secondary)' }}>
                                        KARAPATAN is an alliance of individuals, groups and organizations working for the promotion and protection of human rights in the Philippines. We prioritize the voices of the marginalized, ensuring their struggles are documented and heard globally.
                                    </p>
                                </motion.div>
                                <motion.div layout id="about-vision" className="tab-pane fade">
                                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--secondary)' }}>
                                        We envision a society where human rights are respected, protected, and fulfilled. A future where equality is the foundation of our democracy and every citizen is empowered to live with dignity and peace.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
