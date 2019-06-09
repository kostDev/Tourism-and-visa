import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Home/";
import ServicesPage from "./Services/"
import EducationServicePage from "./Services/EducationService";
import TourismServicePage from "./Services/TourismService";
import AboutPage from "./About/"
import ContactUsPage from "./Contact/";
import NotFoundPage from "./404/"
import './Styles/App.css';

function App(match) {
  return (
      <Router>
        <div className="App">
            <Header />
            <main className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={ServicesPage} />
                    <Route path="/services/education" component={EducationServicePage} />
                    <Route path="/services/tourism" component={TourismServicePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactUsPage} />
                    {/*<Route path="/" exact component={Home} />*/}
                    {/*<Redirect from="/old-match" to="/will-match" />*/}
                    {/*<Route path="/will-match" component={WillMatch} />*/}
                    <Route component={NotFoundPage} />
                </Switch>
                <footer className="container">
                    <p className="float-right"><a href="#">Back to top</a></p>
                    <p>&copy; 2018 by SIT TRAVEL & TOURISM
                    </p>
                </footer>
            </main>
        </div>
      </Router>
  );
}

// {/*<header>*/}
// {/*<div className="site-name col-6">*/}
// {/*<span>SIT TRAVEL & TOURISM</span>*/}
// {/*</div>*/}
// {/*<div className="menu col-6">*/}
// {/*<ul>*/}
// {/*<OldSchoolMenuLink  activeOnlyWhenExact={true} to="/" label="Home" />*/}
// {/*<OldSchoolMenuLink  activeOnlyWhenExact={false} to="/services" label="Services" />*/}
// {/*<OldSchoolMenuLink  activeOnlyWhenExact={false} to="/about" label="About Us" />*/}
// {/*<OldSchoolMenuLink  activeOnlyWhenExact={false} to="/contact" label="Contact Us" />*/}
// {/*</ul>*/}
// {/*</div>*/}
// {/*</header>*/}

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">SIT TRAVEL & TOURISM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <MenuLink  activeOnlyWhenExact={true} to="/" label="Home" />
                        <MenuLink  activeOnlyWhenExact={false} to="/services" label="Services" />
                        <MenuLink  activeOnlyWhenExact={false} to="/about" label="About Us" />
                        <MenuLink  activeOnlyWhenExact={false} to="/contact" label="Contact Us" />
                    </ul>
                </div>
            </nav>
        </header>
    );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <li className={match ? "active" : ""}>
                    <Link to={to}>{label}</Link>
                </li>
            )}
        />
    );
}

export default App;
