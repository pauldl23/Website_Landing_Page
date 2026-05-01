import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceSection from '../components/ServiceSection';

const ServicePage = () => {
    return (
        <>
            <PageHeader title="What We Do" path="Service" />
            <ServiceSection />
        </>
    );
};

export default ServicePage;
