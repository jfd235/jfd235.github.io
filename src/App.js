import React, {useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Lone from './pages/mynute_skills_alone';
import Together from './pages/mynute_skills_together';
import Small from './pages/small';
import Big from './pages/big';
import Skillshare from './pages/skillshare';
import Udemy from './pages/udemy';

// Setup Google analytics
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-249291389-1';
ReactGA.initialize(TRACKING_ID);
  
function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search); // Track page views
	  }, []);
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/lone' element={<Lone />} />
        <Route exact path='/together' element={<Together />} />
        <Route exact path='/small' element={<Small />} />
        <Route exact path='/big' element={<Big />} />
        <Route path='/skillshare' element={<Skillshare/>} />
        <Route path='/udemy' element={<Udemy/>} />
    </Routes>
    </Router>
);
}
  
export default App;