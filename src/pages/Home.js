import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import GetUpdate from './GetUpdate';
// import EmailKey from './emailKey';
import Projects from './Projects';
import Resume from './Resume';
// import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            {/* <h1> This is home page</h1> */}
            <Banner></Banner>
            {/* <Resume></Resume> */}
            {/* <EmailKey> </EmailKey> */}
            {/* <Services></Services> */}
            <Projects></Projects>
            <Skills></Skills>
            <GetUpdate></GetUpdate>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;