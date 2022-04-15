import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';
import Home from './Home';
import Page404 from './Page404';
import Logout from './Logout';
import Voices from './Voices';

function App() {
  return (

    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path='/logout' element={<Logout/>} />
          <Route exact path='/voices' element={<Voices/>} />

          {/* {
            tokenNotParsed ? (
              <>
                <Route exact path="/profile" component={Profile} />
              </>)
              : (
                // <Redirect to="/login"/>
                null
              )
          }
          {
            isAdmin === true ? (
              <>
          <Route exact path="/admin" component={Admin} />
              </>
            ) : (null)
          }
          <Route component={Page404} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
