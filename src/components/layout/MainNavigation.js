import { Link } from "react-router-dom";

import "../../styles/MainNavigation.scss";


function MainNavigation() {

   return (
      <header>
         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary justify-content-between">
            {/* LEFT - APP NAME/ LOGO */}
            <div className="container-fluid">
               <div className="main">
                  <div className="d-flex flex-grow-1">
                     <span className="navbar-brand flex-grow-1 textHuge">TO DO APP</span>           
                  </div>
               </div>

               {/* COLLAPSE BUTTON */}
               <div className="text-right">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                     <span className="navbar-toggler-icon"></span>
                  </button>
               </div>

               {/* RIGHT - NAV LINKS */}
               <div className="collapse navbar-collapse flex-grow-1 text-right w-100" id="myNavbar">
                  <ul className="navbar-nav ms-auto flex-nowrap">
                     <li><Link to="/create-task" className="navbar-brand mr30">Create task</Link></li>
                     <li><Link to="/" className="navbar-brand">Task list</Link></li>
                  </ul>
               </div>   
            </div>
         </nav>
      </header>
   );
}

export default MainNavigation;