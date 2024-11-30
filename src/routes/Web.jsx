import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import RegisterSchool from '../pages/auth/RegisterSchool';
import RegisterStudent from '../pages/auth/RegisterStudent';


export const ProtectedRoutes = ({children}) => {
    const user = localStorage.getItem('token');

    if(user && user !== ''){
        return children;
    } else {
        return <Navigate to="/login" />
    }

};

const Web = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<RegisterSchool />}/>
            <Route path='/registerstu' element={<RegisterStudent />}/>

            <Route path='/dashboard' element={
                <ProtectedRoutes>
                    <Home /> 
                </ProtectedRoutes>
            }/>
        </Routes>
    </BrowserRouter>
  );
};

export default Web