import React, {useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
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
        <Route exact path='/' exact element={<Home />} />
        <Route path='/skillshare' element={<Skillshare/>} />
        <Route path='/udemy' element={<Udemy/>} />
    </Routes>
    </Router>
);
}
  
export default App;