import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`top-bar d-none d-md-block ${isSticky ? 'd-none' : ''}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <i className="fa fa-phone-alt"></i>
                                    <p>270908183</p>
                                </div>
                                <div className="text">
                                    <i className="fa fa-envelope"></i>
                                    <p>publicinfo@karapatan.org</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href="https://twitter.com/karapatan"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/karapatan"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/karapatanphils/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`navbar navbar-expand-lg bg-dark navbar-dark ${isSticky ? 'nav-sticky' : ''}`} style={{ transition: 'all 0.4s ease' }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
                        >
                            <img src={`${import.meta.env.BASE_URL}img/YellowLogoKarapatan.png`} alt="Karapatan Logo" style={{ height: '50px', filter: 'drop-shadow(0 0 10px rgba(253, 190, 51, 0.3))' }} />
                            <span style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '1px', color: '#fff' }}>
                                KARAPATAN
                            </span>
                        </motion.div>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <NavLink to="/" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
                            <NavLink to="/causes" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Archives</NavLink>
                            <NavLink to="/events" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Campaigns</NavLink>
                            <NavLink to="/blog" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Blog</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <Link to="/service" className="dropdown-item">What We Do</Link>
                                    <Link to="/team" className="dropdown-item">Meet The Team</Link>
                                    <Link to="/donate" className="dropdown-item">Donate Now</Link>
                                    <Link to="/volunteer" className="dropdown-item">Become A Volunteer</Link>
                                </div>
                            </div>
                            <NavLink to="/contact" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: `
                    .nav-link {
                        position: relative;
                        font-weight: 700 !important;
                        margin: 0 10px;
                        transition: color 0.3s ease;
                    }
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: 0;
                        left: 50%;
                        background: var(--primary);
                        transition: all 0.3s ease;
                        transform: translateX(-50%);
                    }
                    .nav-link.active::after {
                        width: 80%;
                    }
                    .nav-link:hover::after {
                        width: 80%;
                    }
                    .dropdown-toggle::after {
                        margin-left: 8px;
                        vertical-align: middle;
                        border-top: .4em solid;
                        border-right: .4em solid transparent;
                        border-left: .4em solid transparent;
                    }
                    /* Prevent underline overlap on dropdown */
                    .nav-item.dropdown .nav-link::after {
                        bottom: -5px;
                    }
                    .nav-sticky {
                        background: rgba(32, 33, 43, 0.95) !important;
                        backdrop-filter: blur(10px);
                        padding: 10px 0 !important;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    }
                ` }} />
            </div>
        </>
    );
};

export default Header;
