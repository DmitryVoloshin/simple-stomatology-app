import React from 'react';
import { useMediaPredicate } from "react-media-hook";

import DesktopHeader from './Components/Page-components/Header/Desktop-header/DesktopHeader';
import MobileHeader from './Components/Page-components/Header/Mobile-header/MobileHeader';
import Main from './Components/Page-components/Main/Main';
import Doctors from './Components/Page-components/Doctors/Doctors';
import Footer from './Components/Page-components/Footer/Footer';
import MobileMain from './Components/Page-components/Main/MobileMain';
import DoctrosSchedule from './Components/Logic-components/DoctorsSchedule/DoctorsSchedule';

const App = () => {
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
          <DoctrosSchedule/>
        <Footer/>
      
    </div>
  );
}
export default App;
