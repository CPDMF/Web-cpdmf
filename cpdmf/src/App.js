import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Login from './components/Pages/Login/Login';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import View from './components/Dashboard/View/View';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={dashboard} />
          <Route path='/cpd' component={cpd} />
          <Route path='/course' component={course} />
          <Route path='/workshop' exact component={workshop} />
          <Route path='/blog' component={blogs} />
          <Route path='/forum' component={forum} />
          <Route path='/reports' exact component={reports} />
          <Route path='/job' component={job} />
          <Route path='/payments' component={payments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;