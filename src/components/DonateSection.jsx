import React from 'react';

const DonateSection = () => {
    return (
        <div className="container">
            <div className="donate" data-parallax="scroll" data-image-src="/img/donate.jpg" style={{ backgroundImage: 'url(/img/donate.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed', margin: '90px 0' }}>
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="donate-content">
                            <div className="section-header">
                                <p>Donate Now</p>
                                <h2>Let's Donate Now to Support KARAPATAN</h2>
                            </div>
                            <div className="donate-text">
                                <p>
                                    Let's empower those in need for a brighter future. Your contribution can make a real difference in advancing human rights and improving lives. Join us in our mission to defend and uphold the rights and dignity of individuals and communities across the
                                    Philippines. Together, we can build a society where justice and equality thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="donate-form">
                            <form>
                                <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="control-group">
                                    <label htmlFor="donation-amount">Choose Donation Amount:</label>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-custom active">
                                            <input type="radio" name="donation-amount" value="100" defaultChecked /> ₱100
                                        </label>
                                        <label className="btn btn-custom">
                                            <input type="radio" name="donation-amount" value="500" /> ₱500
                                        </label>
                                        <label className="btn btn-custom">
                                            <input type="radio" name="donation-amount" value="1000" /> ₱1000
                                        </label>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="donation-type">Choose Donation Type:</label>
                                    <select className="form-control" id="donation-type" required defaultValue="">
                                        <option value="" disabled>Select Donation Type</option>
                                        <option value="one-time">One-time Donation</option>
                                        <option value="monthly">Monthly Donation</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit">Donate Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateSection;
