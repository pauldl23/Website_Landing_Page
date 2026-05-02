import React from 'react';
import { motion } from 'framer-motion';

const EventList = () => {
    const events = [
        {
            title: "Statement at the Senate Committee on National Defense and Security hearing on red-tagging",
            desc: "Statement at the Senate Committee on National Defense and Security by Cristina Palabay, Karapatan Secretary General November 24, 2020.",
            date: "Nov 24, 2020",
            img: `${import.meta.env.BASE_URL}img/freedom.jpg`
        },
        {
            title: "Appeal for support for Mamanwa communities forcibly evacuated due to military operations",
            desc: "Dear friends and fellow rights advocates, Greetings! Military elements from the 30th and 38th IBPA have encamped in...",
            date: "March 23, 2012",
            img: `${import.meta.env.BASE_URL}img/mamanwa1.jpg`
        },
        {
            title: "From defenders to victims: the plight HRDs in the Philippines amidst continuing impunity",
            desc: "(Paper presented by Atty. Edre U. Olalia, Secretary General of the National Union of Peoples’ Lawyers (NUPL) and Cristina E. Palabay.",
            date: "February 28, 2012",
            img: `${import.meta.env.BASE_URL}img/NTF.jpg`
        }
    ];

    return (
        <div className="event" style={{ padding: '80px 0' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <p>Campaigns</p>
                    <h2>Understand Who and What We Stand For</h2>
                </motion.div>
                <div className="row">
                    {events.map((event, index) => (
                        <div className="col-lg-6" key={index}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="event-item"
                                style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}
                            >
                                <img src={event.img} alt="Image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <div className="event-content" style={{ padding: '30px' }}>
                                    <div className="event-meta" style={{ marginBottom: '15px', fontSize: '14px', color: '#FDBE33' }}>
                                        <p style={{ margin: 0 }}><i className="fa fa-calendar-alt"></i> {event.date}</p>
                                    </div>
                                    <div className="event-text">
                                        <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>{event.title}</h3>
                                        <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#777' }}>{event.desc}</p>
                                        <a className="btn btn-custom" href="#" style={{ marginTop: '10px' }}>Read More</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventList;
