import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import BreadCrumbsRight from "../../Icons/BreadcrumbsRight/BreadCrumbsRight";
import Footer from "../../Page-components/Footer/Footer";

import './MainPageRoots.css'
import MainRootComponent from "./Root-components/MainRootComponent/MainRootComponent";




const MainPageRoots = ( ) =>{
    return (
        <Router>
          <div>
            <nav className="Main-roots_nav">
             {
                /* We can use material UI for breadcrumbs,but who care? */
             }
              <ul className="breadcrumb">
                <li>
                  <Link to="/" className="breadcrumb-nav_item">Home</Link>
                </li>
                <BreadCrumbsRight/>
                <li>
                  <Link to="/footer" className="breadcrumb-nav_item">Footer</Link>
                </li>
              </ul>
            </nav>
            
           <h2 className="Main-page_title">О лаборатории Astra Dent</h2>


            <div className="Switchable-content_block">

            <Switch>
       
                <Route path="/"component={MainRootComponent} exact/>
                <Route component={Footer}/>
      
            </Switch>
            </div>          
            
            
            </div>
        </Router>
      );
}

export default MainPageRoots