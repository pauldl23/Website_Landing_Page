import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="footer-contact"
                            >
                                <h2>Our Head Office</h2>
                                <p><i className="fa fa-map-marker-alt"></i>Manila, Philippines</p>
                                <p><i className="fa fa-phone-alt"></i>270908183</p>
                                <p><i className="fa fa-envelope"></i>publicinfo@karapatan.org</p>
                                <div className="footer-social">
                                    <a className="btn btn-custom" href="https://twitter.com/karapatan"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-custom" href="https://www.facebook.com/karapatan"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-custom" href="https://www.youtube.com/@KarapatanHumanRights"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-custom" href="https://www.instagram.com/karapatanphils/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="footer-link"
                            >
                                <h2>Popular Links</h2>
                                <Link to="/about">About Us</Link>
                                <Link to="/contact">Contact Us</Link>
                                <Link to="/causes">Popular Causes</Link>
                                <Link to="/events">Upcoming Campaigns</Link>
                                <Link to="/blog">Latest Blog</Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="footer-link"
                            >
                                <h2>Useful Links</h2>
                                <a href="#">Terms of use</a>
                                <a href="#">Privacy policy</a>
                                <a href="#">Cookies</a>
                                <a href="#">Help</a>
                                <a href="#">FAQs</a>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="footer-newsletter"
                            >
                                <h2>Newsletter</h2>
                                <form>
                                    <input className="form-control" placeholder="Email goes here" />
                                    <button className="btn btn-custom">Submit</button>
                                    <label>Don't worry, we don't spam!</label>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <a href="#">Karapatan</a>, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p style={{ color: '#fff' }}>Philippine Human Rights Alliance</p>
                        </div>
                    </div>
                </div>
            </div>

            <a 
                href="#" 
                className="back-to-top" 
                style={{ display: showBackToTop ? 'block' : 'none' }}
                onClick={scrollToTop}
            >
                <i className="fa fa-chevron-up"></i>
            </a>
        </>
    );
};

export default Footer;
