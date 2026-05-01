import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogList from '../components/BlogList';

const BlogPage = () => {
    return (
        <>
            <PageHeader title="Our Blog" path="Blog" />
            <BlogList />
        </>
    );
};

export default BlogPage;
