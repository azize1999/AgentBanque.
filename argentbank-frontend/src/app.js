import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; 
import Footer from './components/Footer/Footer.jsx';        
import Header from './components/Header/Header.jsx';       
import Home from './pages/Home/Home.jsx';                  
import { useSelector } from 'react-redux';                  
import './Main.scss';                                     
import Login from './pages/Login/Login.jsx';               
import Profile from './pages/Profile/Profile.jsx';          


export default function App() {
    
    const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <div>
           
            <Header />
            <Routes>
              
                <Route path='/' element={<Home />} />

                <Route path='login' element={<Login />} />
              
                <Route 
                    path='profile' 
                    element={isConnected ? <Profile /> : <Navigate to="/login" />} 
                />
            </Routes>

            <Footer />
        </div>
    );
}
