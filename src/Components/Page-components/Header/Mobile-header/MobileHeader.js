import React from 'react';
import { MainLogoIcon,InstaIcon,PhoneIcon } from '../../../Icons/Icons';
import BurgerNav from './BurgerNav/BurgerNav';

import './MobileHeader.css'

const MobileHeader = ( ) =>{

    return <header className="mobile-header_styles">
                <BurgerNav/>
                    <div className="mobile-header_logo">
                        <MainLogoIcon logoSize="35px"/>
                        <div>
                        <p>Astra Dent</p>
                        <p>labaratory</p>
                        </div>
                    </div>
                    <div className="header-icons_block">
                    <InstaIcon sizeInpPixels="55px"/>
                    <PhoneIcon/>
                    </div>
            </header>            
}
export default MobileHeader