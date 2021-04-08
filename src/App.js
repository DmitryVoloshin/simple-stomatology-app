import React from 'react';
import { useMediaPredicate } from "react-media-hook";





//Components Imports
import DesktopHeader from './Components/Page-components/Header/Desktop-header/DesktopHeader';
import MobileHeader from './Components/Page-components/Header/Mobile-header/MobileHeader';
import Main from './Components/Page-components/Main/Main';
import Doctors from './Components/Page-components/Doctors/Doctors';
import Footer from './Components/Page-components/Footer/Footer';
import MobileMain from './Components/Page-components/Main/MobileMain';




const App = () => {
    // media hook for changing header when we use mobile phone
    const isThisDesktop = useMediaPredicate("(min-width:769px)")

    
    



    return (
    <div className="App">
        {isThisDesktop? <DesktopHeader/> : <MobileHeader/>}
        {isThisDesktop? <Main/> : <MobileMain/>}
          { 
           isThisDesktop?
          <Doctors howManyDocs="9"/> :
          <Doctors howManyDocs="3"/>
          }
        <Footer/>
    </div>
  );
}

export default App;
