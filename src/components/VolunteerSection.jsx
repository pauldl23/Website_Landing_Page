import React from 'react';
import { motion } from 'framer-motion';

const VolunteerSection = () => {
    return (
        <div className="volunteer" style={{ background: 'var(--grad-organic)', padding: '100px 0', overflow: 'hidden' }}>
            <div className="container">
                <div className="asymmetric-layout reverse">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="volunteer-content"
                    >
                        <div className="section-header" style={{ textAlign: 'left', marginLeft: '0' }}>
                            <p>Become a Volunteer</p>
                            <h2>Help us protect and uphold human rights</h2>
                        </div>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px', color: 'var(--secondary)' }}>
                            Join our network of defenders. Your time and skills can make a significant impact on the ground. Together, we can build a stronger movement for justice and ensure that voices of the marginalized are heard.
                        </p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-surface"
                            style={{ padding: '40px' }}
                        >
                            <form>
                                <div className="control-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full Name" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)', padding: '15px', borderRadius: '12px' }} />
                                </div>
                                <div className="control-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email Address" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)', padding: '15px', borderRadius: '12px' }} />
                                </div>
                                <div className="control-group mb-3">
                                    <textarea className="form-control" placeholder="Why do you want to join?" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)', padding: '15px', borderRadius: '12px', height: '120px' }}></textarea>
                                </div>
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn-custom w-100" 
                                    type="submit"
                                >
                                    Send Application
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="organic-blob"
                        style={{ 
                            backgroundImage: `url(${import.meta.env.BASE_URL}img/volunteer.jpg)`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center', 
                            height: '550px',
                            width: '100%',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                        }}
                    >
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerSection;
