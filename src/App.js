import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Redirect,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages';
import Skillshare from './pages/skillshare';
import Udemy from './pages/udemy';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';
  
function App() {
return (
    <Router>
	<Routes>
    <Route
      exact
      path={'/'}
      element={<Home/>}
    />
    <Route
      exact
      path={'/skillshare'}
      element={<Skillshare/>}
    />
	<Route
      exact
      path={'/udemy'}
      element={<Udemy/>}
    />
	</Routes>
  </Router>
);
}
  
export default App;