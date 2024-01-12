import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import UploadV from './components/UploadV';
import Login from './components/Login';
import Signup from './components/Signup';


const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/videos" Component={Videos} />
        <Route path="/upload" Component={UploadV} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
