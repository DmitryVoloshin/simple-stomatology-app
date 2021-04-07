import React from 'react';



import InstaIcon from '../../../Icons/InstaIcon/InstaIcon';
import MainLogoIcon from '../../../Icons/MainLogoIcon/MainLogoIcon';
import PhoneIcon from '../../../Icons/PhoenIcon/PhoneIcon';

import './DesktopHeader.css'

const DesktopHeader = ( ) =>{

    const navLinks = ['О нас','Услуги','Прайс','Новости','Контакты']
        .map((item,idx)=>{ 
            return <li className="Header-links_item" key={idx}>
                        {item}
                   </li>
        })

    return <header className="Desktop-header_nav">
                <nav className="Header-nav_block">
                <MainLogoIcon/>
                <div className="Header-logo_name">
                    <h2>Astra Dent</h2>
                    <p>Labaratory</p>
                </div>
                <ul className="Desktop-header_links">
                    {navLinks}
                </ul>
                <div className="Desktop-header_buttons">
                    <button className="Header-buttons_green">Заказать услугу</button>
                    <button className="Header-buttons_white">Заказать Звонок</button>
                </div>
                <div className="Desktop-another_block">
                    <div className="Another-block_phone">
                        <PhoneIcon/>
                        <p>(044)<b> 222 33 33</b></p>
                    </div>
                        <i><InstaIcon sizeInpPixels="32px"/></i>
                    <button>Rus</button>
                </div>
                </nav>
           </header>
}

export default DesktopHeader