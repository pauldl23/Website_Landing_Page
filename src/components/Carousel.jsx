import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
    const [videoSrc, setVideoSrc] = React.useState('');
    const [activeIndex, setActiveIndex] = React.useState(0);

    useEffect(() => {
        if (window.$) {
            const owl = window.$(".carousel .owl-carousel");
            owl.owlCarousel({
                autoplay: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                items: 1,
                smartSpeed: 800,
                dots: true,
                loop: true,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ]
            });

            owl.on('changed.owl.carousel', (event) => {
                setActiveIndex(event.item.index);
            });
        }

        const handleVideoBtnClick = (e) => {
            const src = e.currentTarget.getAttribute('data-src');
            setVideoSrc(src);
        };

        const btns = document.querySelectorAll('.btn-play');
        btns.forEach(btn => btn.addEventListener('click', handleVideoBtnClick));

        return () => {
            btns.forEach(btn => btn.removeEventListener('click', handleVideoBtnClick));
        };
    }, []);

    const slides = [
        {
            h1: "Breaking down barriers that Divide Us",
            p: "We are more powerful together than apart, and we’ve never been more energized or more focused.",
            img: "/img/Rally1.jpeg"
        },
        {
            h1: "Making history is what we do!",
            p: "For it is in the actions of today that the chapters of tomorrow are written.",
            img: "/img/BlackandWhiteRally.jpeg"
        },
        {
            h1: "Your voice has never been more important",
            p: "Our strength reflects each individual's personal commitment to helping the community.",
            img: "/img/WomenRally.jpeg"
        }
    ];

    return (
        <div className="carousel">
            <div className="container-fluid">
                <div className="owl-carousel">
                    {slides.map((slide, index) => (
                        <div className="carousel-item" key={index}>
                            <div className="carousel-img">
                                <img src={slide.img} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {slide.h1}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {slide.p}
                                </motion.p>
                                <motion.div 
                                    className="carousel-btn"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <a className="btn btn-custom" href="/donate">Donate Now</a>
                                    <a className="btn btn-custom btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/KymtKllO1cc" data-target="#videoModal">Watch Video</a>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ background: 'transparent', border: 'none' }}>
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setVideoSrc('')} style={{ color: '#fff', fontSize: '40px', top: '-40px' }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="embed-responsive embed-responsive-16by9" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 50px rgba(0,0,0,0.5)' }}>
                                <iframe className="embed-responsive-item" src={videoSrc ? `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0` : ''} id="video" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
