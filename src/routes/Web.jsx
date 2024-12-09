import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import CreateSchool from '../pages/School/Create';
import CreateStudent from '../pages/Student/Create';
import IndexSchool from '../pages/School/Index';
import IndexStudent from '../pages/Student/Index';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import PrivateRoute from './PrivateRoute';

const Web = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>}/>
            <Route path='/school' element={<PrivateRoute><IndexSchool /></PrivateRoute>}/>
            <Route path='/student' element={<PrivateRoute><IndexStudent /></PrivateRoute>}/>
            <Route path='/school/create' element={<PrivateRoute><CreateSchool /></PrivateRoute>}/>
            <Route path='/student/create' element={<PrivateRoute><CreateStudent /></PrivateRoute>}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Web