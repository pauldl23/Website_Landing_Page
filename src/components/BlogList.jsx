import React from 'react';
import { motion } from 'framer-motion';

const BlogList = () => {
    const blogs = [
        {
            title: "Karapatan salutes Luis Teodoro, Staunch Human Rights Defender and Press Freedom Fighter",
            desc: "Karapatan sends its deepest condolences to the family, friends and colleagues of veteran journalist, human rights defender and staunch press freedom fighter Prof. Luis Teodoro.",
            img: "/img/Prof.jpeg"
        },
        {
            title: "KARAPATAN on International Labor Day 2024",
            desc: "On International Labor Day 2024, KARAPATAN joins thousands of workers who marched to the streets to demand higher wages, job security and the recognition of their right to unionize.",
            img: "/img/laborday.jpg"
        },
        {
            title: "KARAPATAN supports jeepney drivers’ Transport Strike",
            desc: "KARAPATAN expresses its staunchest solidarity with the striking jeepney drivers and operators led by Piston who are airing their grievances.",
            img: "/img/jeepneydriver.jpeg"
        },
        {
            title: "Rights group decries recent rights, IHL violations in Bukidnon",
            desc: "KARAPATAN condemns the series of grave violations of human rights and International Humanitarian Law (IHL) perpetrated by state forces in Bukidnon.",
            img: "/img/IHL.jpeg"
        },
        {
            title: "KARAPATAN condemns Bombings, Military Operations in Abra and Ilocos Sur",
            desc: "KARAPATAN condemns the intensified military operations in the towns of Pilar, Abra and Sta. Maria, Ilocos Sur.",
            img: "/img/Bomb.png"
        },
        {
            title: "Karapatan remembers Rene Saguisag",
            desc: "Karapatan extends its deepest condolences to the family, friends and colleagues of Atty. Rene Saguisag, who died on April 24, 2024.",
            img: "/img/Rene.png"
        }
    ];

    return (
        <div className="blog" style={{ padding: '80px 0' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <p>Our Blog</p>
                    <h2>Latest news & articles directly from our blog</h2>
                </motion.div>
                <div className="row">
                    {blogs.map((blog, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="blog-item"
                                style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}
                            >
                                <div className="blog-img" style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={blog.img} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="blog-text" style={{ padding: '25px' }}>
                                    <h3 style={{ fontSize: '18px', marginBottom: '15px' }}><a href="#" style={{ color: '#4a4c70' }}>{blog.title}</a></h3>
                                    <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{blog.desc}</p>
                                </div>
                                <div className="blog-meta" style={{ padding: '0 25px 25px 25px', display: 'flex', gap: '15px', fontSize: '13px' }}>
                                    <p style={{ margin: 0 }}><i className="fa fa-user" style={{ color: '#FDBE33' }}></i> Admin</p>
                                    <p style={{ margin: 0 }}><i className="fa fa-comments" style={{ color: '#FDBE33' }}></i> Comments</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
