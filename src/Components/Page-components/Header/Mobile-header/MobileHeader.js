import React from 'react';
import InstaIcon from '../../../Icons/InstaIcon/InstaIcon';



import MainLogoIcon from '../../../Icons/MainLogoIcon/MainLogoIcon';
import BurgerNav from './BurgerNav/BurgerNav';


import './MobileHeader.css'

const MobileHeader = ( ) =>{

  

    return <header>
                <BurgerNav/>
                <div className="last">
                    <MainLogoIcon/>
                    <div>
                        <p>Astra Dent</p>
                        <p>labaratory</p>
                    </div>
                    <InstaIcon/>
                </div>
            </header>
                
            
}

export default MobileHeader