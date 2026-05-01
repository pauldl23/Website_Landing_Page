import React from 'react';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import FactsSection from '../components/FactsSection';
import ArchivesSection from '../components/ArchivesSection';
import VolunteerSection from '../components/VolunteerSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import DonateSection from '../components/DonateSection';

const Home = () => {
    return (
        <>
            <Carousel />
            <AboutSection />
            <ServiceSection />
            <FactsSection />
            <ArchivesSection />
            <VolunteerSection />
            <TeamSection />
            <ContactSection />
            <DonateSection />
        </>
    );
};

export default Home;
