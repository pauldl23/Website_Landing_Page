import React from 'react';
import PageHeader from '../components/PageHeader';
import ArchivesSection from '../components/ArchivesSection';

const CausesPage = () => {
    return (
        <>
            <PageHeader title="Popular Causes" path="Causes" />
            <ArchivesSection />
        </>
    );
};

export default CausesPage;
