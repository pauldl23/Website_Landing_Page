import React from 'react';
import { motion } from 'framer-motion';

const ArchivesSection = () => {
    const causes = [
        {
            title: "Philippines-Palestine Friendship Association",
            desc: "A network promotes solidarity between the people of Palestine and the Philippines, actively advocating for their rights.",
            img: "/img/FreeP.png",
            link: "https://www.facebook.com/philippinespalestine/"
        },
        {
            title: "Pambansang Koalisyon ng Kababaihan sa Kanayunan",
            desc: "Empower rural women across 32 provinces to advance their advocacies for the Rural Women’s Agenda.",
            img: "/img/PKKK.png",
            link: "https://pkkk.org/"
        },
        {
            title: "ECPAT Philippines",
            desc: "Non-profit fighting child sexual exploitation through advocacy, research, and victim assistance.",
            img: "/img/ECPAT.png",
            link: "https://ecpat.org.ph/"
        },
        {
            title: "For The Future: 88k Trees",
            desc: "Restoring ancestral land with the Yangil Tribe, planting native seedlings to restore ecosystems.",
            img: "/img/ForTheFuture.png",
            link: "https://www.forthefuture.org.ph/"
        }
    ];

    return (
        <div className="causes" style={{ padding: '80px 0' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <p>Popular Causes</p>
                    <h2>Explore our recent campaigns and archives</h2>
                </motion.div>
                <div className="row d-flex align-items-stretch">
                    {causes.map((cause, index) => (
                        <div className="col-lg-3 col-md-6 mb-4 d-flex" key={index}>
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="causes-item w-100"
                                style={{ 
                                    background: '#fff', 
                                    borderRadius: '15px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    marginBottom: '30px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div className="causes-img" style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={cause.img} alt={cause.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="causes-text" style={{ padding: '25px', flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>{cause.title}</h3>
                                    <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{cause.desc}</p>
                                </div>
                                <div className="causes-btn" style={{ padding: '0 25px 25px 25px', display: 'flex', gap: '10px' }}>
                                    <a className="btn btn-custom" href={cause.link} target="_blank" rel="noopener noreferrer" style={{ padding: '8px 15px', fontSize: '14px', flex: 1 }}>Learn More</a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchivesSection;
