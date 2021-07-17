import React from 'react';
import './Login.css';

function Login() {
  return (
      <div className="container mt-4">
        <div className="headerTop">
            <h1>SIGN IN</h1>
        </div>
        <form>
            <div className="form-group row">
                <label for="Email" className="col-sm-2 col-form-label">Membership No/Email</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="Email" value="email@example.com"></input>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
                </div>
            </div>
            <button type="submit" className="btn btn-success">SIGN IN</button>
        </form>
      </div>
   
  );
}

export default Login;
