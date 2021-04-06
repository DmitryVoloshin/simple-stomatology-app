import React from 'react';
import { useMediaPredicate } from "react-media-hook";




//Components Imports
import DesktopHeader from './Components/Page-components/Header/Desktop-header/DesktopHeader';
import MobileHeader from './Components/Page-components/Header/Mobile-header/MobileHeader';




const App = () => {
    // media hook for changing header when we use mobile phone
    const isThisDesktop = useMediaPredicate("(min-width:568px)")
  
    return (
    <div className="App">
        {isThisDesktop? <DesktopHeader/> : <MobileHeader/>}
    </div>
  );
}

export default App;
