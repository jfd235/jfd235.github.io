import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Skillshare from './pages/skillshare';
import Udemy from './pages/udemy';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';
  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/skillshare' element={<Skillshare/>} />
        <Route path='/udemy' element={<Udemy/>} />
        {/* <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
);
}
  
export default App;