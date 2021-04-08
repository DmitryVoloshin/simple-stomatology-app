import React from "react";
import BreadCrumbsRight from "../../Icons/BreadcrumbsRight/BreadCrumbsRight";
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
            <nav className="Main-roots_nav">
            <button onClick={switchToAbout} disabled={mainDisabled} className="Breadcrumbs-button">Главная</button>
            <BreadCrumbsRight/>
            <button onClick={switchToHome} disabled={aboutDisabled} className="Breadcrumbs-button">О Нас</button>
            </nav>

            {/*Here we can use mediaHook for h2 but i guess we can do some trick with css */}
            <h2 className="Main-page_title">О лаборатории Astra Dent</h2>
            <div className="Switchable-content_block">
            <h2 className="Mobile-page_title">О лаборатории Astra Dent</h2>
            {swithcer?   <MainPresComp/> : <AboutPresComp/>}
            </div>
        </div>
                  
 
      )
}

export default MainPageSwitcher