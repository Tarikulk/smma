import React from 'react';
import Header from '../Header/Header';
import Process from '../WorkProcess/Process';
import Companies from '../Companies/Companies';
import OurWorks from '../Works/OurWorks';
import Pricing from '../Pricing/Pricing';
import CTA from '../CTA/CTA';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Companies></Companies>
          <Process></Process>
          <Pricing></Pricing>
          <OurWorks></OurWorks>
          <CTA />
        </div>
    );
};

export default Home;