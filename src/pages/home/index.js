import React from 'react';

import Banner from './banner';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Portfolio from './portfolio';


function Home() {

    return (
        <>
            <Banner />
            <About />
            <Experience />
            <Skills />
            <Portfolio />
        </>
    )
}

export default Home