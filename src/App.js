import React from 'react';
import { useMediaPredicate } from "react-media-hook";

import DesktopHeader from './Components/Page-components/Header/Desktop-header/DesktopHeader';
import MobileHeader from './Components/Page-components/Header/Mobile-header/MobileHeader';
import Main from './Components/Page-components/main/Main';
import Doctors from './Components/Page-components/doctors/Doctors';
import Footer from './Components/Page-components/footer/Footer';
import MobileMain from './Components/Page-components/main/MobileMain';
import DoctrosSchedule from './Components/Logic-components/doctors-schedule/DoctorsSchedule';

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
