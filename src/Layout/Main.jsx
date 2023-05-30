import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Hooter from '../Pages/Shared/Hooter/Hooter';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderfooter = location.pathname.includes('login')
    return (
        <div>
            { noHeaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderfooter || <Hooter></Hooter>}
        </div>
    );
};

export default Main;