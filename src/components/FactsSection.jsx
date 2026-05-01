import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FactsSection = () => {
    useEffect(() => {
        if (window.$ && window.$.fn.counterUp) {
            window.$('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 2000
            });
        }
    }, []);

    const facts = [
        { icon: "flaticon-charity", count: "1000", title: "HRVs Documented" },
        { icon: "flaticon-kindness", count: "500", title: "Communities Served" },
        { icon: "flaticon-donation", count: "25", title: "Years of Struggle" },
        { icon: "flaticon-volunteer", count: "250", title: "Volunteers" }
    ];

    return (
        <div className="facts" style={{ 
            backgroundImage: 'linear-gradient(rgba(32, 33, 43, 0.8), rgba(32, 33, 43, 0.8)), url(/img/facts.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', 
            padding: '100px 0',
            color: '#fff'
        }}>
            <div className="container">
                <div className="row">
                    {facts.map((fact, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="facts-item" 
                                style={{ textAlign: 'center', marginBottom: '30px' }}
                            >
                                <i className={fact.icon} style={{ fontSize: '60px', color: '#FDBE33', marginBottom: '20px', display: 'block' }}></i>
                                <div className="facts-text">
                                    <h2 data-toggle="counter-up" style={{ color: 'var(--primary)', fontSize: '64px', fontWeight: '800', marginBottom: '5px' }}>{fact.count}</h2>
                                    <p style={{ fontSize: '18px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{fact.title}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FactsSection;
