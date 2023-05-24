import React from 'react';
import { Outlet } from 'react-router-dom';
import Hooter from '../Pages/Shared/Hooter/Hooter';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hooter></Hooter>
        </div>
    );
};

export default Main;