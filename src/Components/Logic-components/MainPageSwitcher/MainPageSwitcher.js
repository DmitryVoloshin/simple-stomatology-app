import React from "react";
import BreadCrumbsRight from "../../Icons/BreadcrumbsRight/BreadCrumbsRight";


import './MainPageSwitcher.css'



const MainPageSwitcher = ( ) =>{

    const[swithcer,setSwitcher] = React.useState(true)
    const[mainDisabled,setMainDisabled] = React.useState(true)
    const[aboutDisabled,setAboutDisabled] = React.useState(false)

    const switchToAbout =( ) =>{
        setSwitcher(false) 
        setMainDisabled(true)
        setAboutDisabled(false)
    }
    const switchToHome = () =>{
        setSwitcher(true)
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
            {swithcer? <div>Some info</div> : <div>Not Pepega</div>}
            </div>
        </div>
                  
 
      )
}

export default MainPageSwitcher