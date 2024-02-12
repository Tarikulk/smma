import React from 'react';
import { Navbar, Footer } from '../Components';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;