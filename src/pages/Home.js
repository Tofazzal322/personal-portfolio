import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import GetUpdate from './GetUpdate';
import Projects from './Projects';
import Skills from './Skills';
import Technology from './Technology';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Technology></Technology>
            <GetUpdate></GetUpdate>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;