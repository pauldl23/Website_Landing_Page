import React from 'react';
import PageHeader from '../components/PageHeader';
import EventList from '../components/EventList';

const EventPage = () => {
    return (
        <>
            <PageHeader title="Campaigns" path="Campaigns" />
            <EventList />
        </>
    );
};

export default EventPage;
