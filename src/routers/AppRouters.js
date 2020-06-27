import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SideBar from '../components/SideBar';
import SocialLink from '../components/SocialLink'
import RootPage from '../components/RootPage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <SideBar/>
                <Route path="/" component={RootPage} exact/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/projects" component={ProjectsPage}/>
                <Route path="/contact" component={ContactPage}/>
                {/* <Route component={RootPage} exact/> */}
                <SocialLink/>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;