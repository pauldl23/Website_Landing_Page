import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import FactsSection from '../components/FactsSection';
import TeamSection from '../components/TeamSection';

const AboutPage = () => {
    return (
        <>
            <PageHeader title="About Us" path="About Us" />
            <AboutSection />
            <FactsSection />
            <TeamSection />
        </>
    );
};

export default AboutPage;
