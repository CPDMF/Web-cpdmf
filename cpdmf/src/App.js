// import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Login from './components/Pages/Login/Login';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import View from './components/Pages/Dashboard/View/View';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/about">
           <About/> 
        </Route> 
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/dashboard">
        <View />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
