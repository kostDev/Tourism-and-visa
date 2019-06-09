import React from 'react';

function ContactUsPage() {
    return (
        <div className="Contact-us">
                <div className="row mr-0" style={{height: "inherit"}}>
                    <div className="col-sm-12 col-md-12 col-lg-9  form-block">
                        <div className="d-flex flex-column form-group">
                            <input className="form-control form-group" type="text" placeholder="Name" />
                            <input className="form-control form-group" type="text" placeholder="Email" />
                            <input className="form-control form-group" type="text" placeholder="Subject" />
                            <textarea className="form-control form-group" rows="6" placeholder="Message" />
                            <button className="btn btn-success">Send</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 pt-5 block-contact-information">
                        <div>
                            <p className="font-weight-bold fs-24">Connect with us:</p>
                            <span className="">For support or any questions:</span><br/>
                            <span>Email us at: <a className="email-link" href="mailto:youremailaddress">email@emaii.com</a></span>
                            <br/><span>Phone: <span className="active">+70000000</span></span>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ContactUsPage;