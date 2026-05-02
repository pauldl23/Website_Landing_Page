import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, path }) => {
    return (
        <div className="page-header" style={{ 
            backgroundImage: `linear-gradient(rgba(32, 33, 43, 0.7), rgba(32, 33, 43, 0.7)), url(${import.meta.env.BASE_URL}img/page-header.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '160px 0 90px 0',
            textAlign: 'center',
            marginBottom: '60px'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{ color: '#fff', fontSize: '45px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '15px' }}>{title}</h2>
                    </div>
                    <div className="col-12">
                        <Link to="/" style={{ color: '#FDBE33', fontSize: '18px', fontWeight: '600' }}>Home</Link>
                        <span style={{ color: '#fff', margin: '0 10px', fontSize: '18px' }}>/</span>
                        <span style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>{path}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
