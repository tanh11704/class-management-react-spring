import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="header header-transparent dark-text">
            <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                    <div className="nav-header">
                        <NavLink className="nav-brand" to="#">
                            <img src="./images/logo.png" className="logo" alt=""/>
                        </NavLink>
                        <div className="nav-toggle"></div>
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    <NavLink to="#" data-bs-toggle="modal" data-bs-target="#login"
                                       className="theme-cl fs-lg">
                                        <i className="lni lni-user"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="dashboard-post-job.html" className="crs_yuo12 w-auto text-white theme-bg">
                                        <span className="embos_45"><i className="fas fa-plus-circle me-1 me-1"></i>Post Job</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style={{transitionProperty: "none"}}><span
                        className="nav-menus-wrapper-close-button">✕</span>
                        <ul className="nav-menu">
                            <li><a href="#">Home<span className="submenu-indicator"><span
                                className="submenu-indicator-chevron"></span></span></a>
                                <ul className="nav-dropdown nav-submenu" style={{right: "auto"}} >
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="home-2.html">Home 2</a></li>
                                    <li><a href="home-3.html">Home 3</a></li>
                                    <li><a href="home-4.html">Home 4</a></li>
                                    <li><a href="home-5.html">Home 5</a></li>
                                    <li><a href="home-6.html">Home 6</a></li>
                                    <li><a href="home-7.html">Home 7</a></li>
                                    <li><a href="home-8.html">Home 8</a></li>
                                </ul>
                            </li>

                            <li><NavLink to="javascript:void(0);">Find Job<span className="submenu-indicator"><span
                                className="submenu-indicator-chevron"></span></span></NavLink>
                                <ul className="nav-dropdown nav-submenu" style={{right: "auto"}}>
                                    <li><a href="job-search-v1.html">Job Search V1</a></li>
                                    <li><a href="job-search-v2.html">Job Search V2</a></li>
                                    <li><a href="job-search-v3.html">Job Search V3</a></li>
                                    <li><a href="job-list-v1.html">Job Search V4</a></li>
                                    <li><a href="job-list-v2.html">Job Search V5</a></li>
                                    <li><a href="job-list-v3.html">Job Search V6</a></li>
                                    <li><a href="javascript:void(0);">Map Styles<span
                                        className="submenu-indicator"><span
                                        className="submenu-indicator-chevron"></span></span></a>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><a href="job-half-map.html">Search On Map V1</a></li>
                                            <li><a href="job-half-map-v2.html">Search On Map V2</a></li>
                                            <li><a href="job-search-map-v1.html">Search On Map V3</a></li>
                                            <li><a href="job-search-map-v2.html">Search On Map V4</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);">Single Job<span
                                        className="submenu-indicator"><span
                                        className="submenu-indicator-chevron"></span></span></a>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><a href="single-job-1.html">Single Job V1</a></li>
                                            <li><a href="single-job-2.html">Single Job V2</a></li>
                                            <li><a href="single-job-3.html">Single Job V3</a></li>
                                            <li><a href="single-job-4.html">Single Job V4</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li><a href="javascript:void(0);">Candidates<span className="submenu-indicator"><span
                                className="submenu-indicator-chevron"></span></span></a>
                                <ul className="nav-dropdown nav-submenu" style={{right: "auto"}}>
                                    <li><a href="browse-jobs.html">Browse Jobs</a></li>
                                    <li><a href="browse-resumes.html">Browse Resumes</a></li>
                                    <li><a href="browse-category.html">Browse Categories</a></li>
                                    <li><a href="candidate-detail.html">Candidate Detail</a></li>
                                    <li><a href="candidate-dashboard.html">Candidate Dashboard</a></li>
                                </ul>
                            </li>

                            <li><a href="javascript:void(0);">Employers<span className="submenu-indicator"><span
                                className="submenu-indicator-chevron"></span></span></a>
                                <ul className="nav-dropdown nav-submenu" style={{right: "auto"}}>
                                    <li><a href="browse-employers.html">Browse Employers V1</a></li>
                                    <li><a href="browse-employers-list.html">Browse Employers V2</a></li>
                                    <li><a href="employer-detail.html">Employer Detail</a></li>
                                    <li><a href="employer-dashboard.html">Employer Dashboard</a></li>
                                </ul>
                            </li>

                            <li><a href="javascript:void(0);">Pages<span className="submenu-indicator"><span
                                className="submenu-indicator-chevron"></span></span></a>
                                <ul className="nav-dropdown nav-submenu" style={{right: "auto"}}>
                                    <li><a href="blog.html">Blog Style</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                    <li><a href="docs.html">Docs</a></li>
                                </ul>
                            </li>

                        </ul>

                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="ft-medium">
                                    <i className="lni lni-user me-2"></i>Sign In
                                </a>
                            </li>
                            <li className="add-listing">
                                <a href="dashboard-post-job.html" className="theme-bg">
                                    <i className="lni lni-circle-plus me-1"></i> Post a Job
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
