import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';

import './Main.scss';
import Login from './pages/Login/Login.jsx';

export default function App () {
    

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
            </Routes>
            <Footer />
        </div>
    )  
}