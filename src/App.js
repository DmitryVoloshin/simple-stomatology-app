import React from 'react';
import { useMediaPredicate } from "react-media-hook";





//Components Imports
import DesktopHeader from './Components/Page-components/Header/Desktop-header/DesktopHeader';
import MobileHeader from './Components/Page-components/Header/Mobile-header/MobileHeader';
import Main from './Components/Page-components/Main/Main';
import Doctors from './Components/Page-components/Doctors/Doctors';




const App = () => {
    // media hook for changing header when we use mobile phone
    const isThisDesktop = useMediaPredicate("(min-width:568px)")
  
    return (
    <div className="App">
        {isThisDesktop? <DesktopHeader/> : <MobileHeader/>}
        <Main/>
        <Doctors/>
    </div>
  );
}

export default App;
