import React, {Component} from 'react';

class Home extends Component{

    render () {
        return (
            <div className="">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                                 role="img">
                                <rect width="100%" height="100%" fill="#777"></rect>
                            </svg>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                                 role="img">
                                <rect width="100%" height="100%" fill="#777"></rect>
                            </svg>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                                 role="img">
                                <rect width="100%" height="100%" fill="#777"></rect>
                            </svg>
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container marketing">
                    <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                 width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                 aria-label="Placeholder: 500x500"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#eee"/>
                                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                            </svg>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Oh yeah, it’s that good. <span
                                className="text-muted">See for yourself.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <svg
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                aria-label="Placeholder: 500x500"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#eee"/>
                                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                            </svg>
                        </div>
                    </div>
                    <hr className="featurette-divider"/>
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">And lastly, this one. <span
                                className="text-muted">Checkmate.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                                id ligula porta felis euismod semper. Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <svg
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                aria-label="Placeholder: 500x500"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#eee"/>
                                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                            </svg>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>
            </div>
        );
    }
}

export default Home;