import React from "react";
import { BreadCrumbsRight } from "../../Icons/Icons";
import AboutPresComp from "../../Presentation-components/about-presentation-component/AboutPresComp";
import MainPresComp from "../../Presentation-components/main-presentation-component/MainPresComp";

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
            <nav className="main-roots_nav">
            <button onClick={switchToAbout} disabled={mainDisabled} className="breadcrumbs-button">Главная</button>
            <BreadCrumbsRight/>
            <button onClick={switchToHome} disabled={aboutDisabled} className="breadcrumbs-button">О Нас</button>
            </nav>
            <h2 className="main-page_title">О лаборатории Astra Dent</h2>
            <div className="switchable-content_block">
            <h2 className="mobile-page_title">О лаборатории Astra Dent</h2>
            {swithcer?   <MainPresComp/> : <AboutPresComp/>}
            </div>
        </div>
      )
}

export default MainPageSwitcher