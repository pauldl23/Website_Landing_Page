import React from 'react';
import PageHeader from '../components/PageHeader';
import DonateSection from '../components/DonateSection';

const DonatePage = () => {
    return (
        <>
            <PageHeader title="Donate Now" path="Donate" />
            <DonateSection />
        </>
    );
};

export default DonatePage;
