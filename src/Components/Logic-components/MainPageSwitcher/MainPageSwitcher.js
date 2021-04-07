import React from "react";
import { useCallback } from "react";
import BreadCrumbsRight from "../../Icons/BreadcrumbsRight/BreadCrumbsRight";
import AboutPresComp from "../../Present-components/AboutPresentationComponent/AboutPresComp";
import MainPresComp from "../../Present-components/MainPresentationComponent/MainPresComp";


import './MainPageSwitcher.css'



const MainPageSwitcher = ( ) =>{

    const[swithcer,setSwitcher] = React.useState(true)
    const[mainDisabled,setMainDisabled] = React.useState(true)
    const[aboutDisabled,setAboutDisabled] = React.useState(false)


    const switchToAbout = () =>{
            setSwitcher(true)
            setMainDisabled(true)
            setAboutDisabled(false)
        }
     
    const switchToHome = () =>{
            setSwitcher(false)
            setMainDisabled(false)
            setAboutDisabled(true)
        }
    

    return (
        <div>       
            <nav className="Main-roots_nav">
            <button onClick={switchToAbout} disabled={mainDisabled} className="Breadcrumbs-button">Главная</button>
            <BreadCrumbsRight/>
            <button onClick={switchToHome} disabled={aboutDisabled} className="Breadcrumbs-button">О Нас</button>
            </nav>
            <h2 className="Main-page_title">О лаборатории Astra Dent</h2>

            <div className="Switchable-content_block">
            {swithcer?   <MainPresComp/> : <AboutPresComp/>}
            </div>
        </div>
                  
 
      )
}

export default MainPageSwitcher