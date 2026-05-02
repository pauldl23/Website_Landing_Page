import React from 'react';
import { motion } from 'framer-motion';

const ServiceSection = () => {
    const services = [
        {
            title: "Human Rights Advocacy",
            desc: "Efforts to promote and defend the fundamental rights and freedoms of individuals, including civil, political, economic, social, and cultural rights.",
            icon: `${import.meta.env.BASE_URL}img/advocacy-icon.png`,
            isImg: true
        },
        {
            title: "Services Program",
            desc: "Provision of support and assistance to individuals and communities affected by human rights violations, including legal aid, counseling, and other essential services.",
            icon: `${import.meta.env.BASE_URL}img/services.png`,
            isImg: true
        },
        {
            title: "Documentation and Research",
            desc: "Collection, analysis, and dissemination of information and data related to human rights violations and the overall human rights situation in the country, often used for advocacy, legal action, and policy development.",
            icon: `${import.meta.env.BASE_URL}img/documentation.png`,
            isImg: true
        },
        {
            title: "Campaign and Advocacy",
            desc: "Engagement in activities designed to generate public awareness, mobilize support, and influence policies and actions related to human rights issues and concerns.",
            icon: "flaticon-healthcare",
            isImg: false
        },
        {
            title: "Education and Training",
            desc: "Activities aimed at raising awareness about human rights, empowering individuals with knowledge and skills to advocate for their rights, and fostering active participation in human rights campaigns and activities.",
            icon: "flaticon-education",
            isImg: false
        },
        {
            title: "Network Building and Alliance Work",
            desc: "Collaboration and partnership with various organizations, groups, and individuals to strengthen advocacy efforts, build solidarity, and amplify the impact of human rights initiatives through collective action.",
            icon: "flaticon-social-care",
            isImg: false
        }
    ];

    return (
        <div className="service" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <p>What We Do</p>
                    <h2>Human Rights Advocacy & Empowerment</h2>
                </motion.div>
                <div className="row d-flex align-items-stretch">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-4 d-flex" key={index}>
                            <motion.div 
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="service-item w-100"
                                style={{ 
                                    background: 'var(--grad-organic)',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(253, 190, 51, 0.1)',
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    padding: '40px'
                                }}
                            >
                                <div className="service-icon" style={{ 
                                    width: '80px', 
                                    height: '80px', 
                                    borderRadius: '20px', 
                                    background: 'white', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    marginBottom: '25px',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                }}>
                                    {service.isImg ? (
                                        <img src={service.icon} alt={service.title} style={{ width: '45px' }} />
                                    ) : (
                                        <i className={service.icon} style={{ fontSize: '40px', color: 'var(--primary)' }}></i>
                                    )}
                                </div>
                                <div className="service-text" style={{ flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{service.title}</h3>
                                    <p style={{ fontSize: '15px', color: 'var(--secondary)', lineHeight: '1.7' }}>{service.desc}</p>
                                </div>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-custom" 
                                    style={{ marginTop: '25px', width: '100%', fontSize: '14px' }}
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
