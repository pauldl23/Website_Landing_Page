import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
    const team = [
        { name: "Cristina Palabay", role: "Secretary General", img: "/img/team2.png" },
        { name: "Atty. Edre Olalia", role: "Legal Counsel", img: "/img/team1.png" },
        { name: "Jigs Clamor", role: "Deputy Secretary General", img: "/img/team3.png" },
        { name: "Atty. Maria Sol Taule", role: "Legal Counsel", img: "/img/team4.png" }
    ];

    return (
        <div className="team" style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <p>Our Leadership</p>
                    <h2>The Defenders Behind Our Movement</h2>
                </motion.div>
                <div className="row d-flex align-items-stretch">
                    {team.map((member, index) => (
                        <div className="col-lg-3 col-md-6 mb-5 d-flex" key={index}>
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -15 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="team-item w-100"
                                style={{ 
                                    background: 'var(--grad-organic)', 
                                    borderRadius: '24px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid rgba(0,0,0,0.02)'
                                }}
                            >
                                <div className="team-img" style={{ position: 'relative', overflow: 'hidden', paddingTop: '110%' }}>
                                    <img src={member.img} alt={member.name} style={{ 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%', 
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) brightness(0.9)',
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
                                    }} className="member-photo" />
                                    <div className="team-social" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(253, 190, 51, 0.9)', opacity: '0', transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                        <motion.a whileHover={{ scale: 1.2 }} href="#" style={{ color: '#20212B', margin: '0 12px', fontSize: '24px' }}><i className="fab fa-twitter"></i></motion.a>
                                        <motion.a whileHover={{ scale: 1.2 }} href="#" style={{ color: '#20212B', margin: '0 12px', fontSize: '24px' }}><i className="fab fa-facebook-f"></i></motion.a>
                                        <motion.a whileHover={{ scale: 1.2 }} href="#" style={{ color: '#20212B', margin: '0 12px', fontSize: '24px' }}><i className="fab fa-linkedin-in"></i></motion.a>
                                    </div>
                                </div>
                                <div className="team-text" style={{ padding: '30px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: 'var(--secondary)' }}>{member.name}</h2>
                                    <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .team-item:hover .member-photo {
                    filter: grayscale(0%) brightness(1);
                    transform: scale(1.05);
                }
                .team-item:hover .team-social {
                    opacity: 1;
                }
            ` }} />
        </div>
    );
};

export default TeamSection;
