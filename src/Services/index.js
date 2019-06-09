import React from 'react';
import { Link } from "react-router-dom";

import education from "./img/education.jpg";
import tourism from "./img/tourism.jpg";

function ServicesPage() {
    return (
        <div className="container marketing  pt-5">
            <div className="row">
                <div className="col-lg-6 mb-3 block-service">
                    <img className="bd-placeholder-img" width="140" height="140" src={tourism} />
                    <h2>Tourism</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><Link to="/services/tourism" className="btn btn-secondary">View details &raquo;</Link></p>
                </div>
                <div className="col-lg-6 mb-3 block-service">
                    <img className="bd-placeholder-img" width="140" height="140" src={education} />
                    <h2>Education</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p>
                        <Link to="/services/education" className="btn btn-secondary">View details &raquo;</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;