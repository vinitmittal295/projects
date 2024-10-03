// import React from 'react'
// import {Link} from "react-router-dom"

// const Dashbar = () => {
//   return (
//     <div>
//     <h1>this is Dashbar</h1>
//     <Link to={"/"}>home</Link>
//     <Link to={"/class"}>Class</Link>
//     <Link to={"/teacher"}>Teacher</Link>
//     <Link to={"/login"}>Login</Link>
//     <Link to={"/signup"}>Signup</Link>


//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#" >Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Features</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Pricing</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>    
//       </ul>
//     </div>
//   </div>
// </nav>



        
//     </div>
//   )
// }

// export default Dashbar







import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashbar"

const Dashbar = () => {
  return (
    <div>
      <h1>This is Dashboard</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/class">class</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/class">class Data</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacher">teacher</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacher">teacher Data</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/student" aria-disabled="true">student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/student" aria-disabled="true">student Data</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashbar;
