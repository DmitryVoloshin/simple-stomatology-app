import React from 'react';
import { MainLogoIcon,PhoneIcon,InstaIcon } from '../../../Icons/Icons';

import './DesktopHeader.css'

const DesktopHeader = ( ) =>{
    
    const navLinks = ['О нас','Услуги','Прайс','Новости','Контакты']
        .map((item,idx)=>{ 
            return <li className="Header-links_item" key={idx}>
                        <a href={item}>{item}</a>
                   </li>
        })

    return <header className="Desktop-header_nav">
                <nav className="Header-nav_block">
                    <MainLogoIcon logoSize ="35px"/>
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
                            <InstaIcon sizeInpPixels="32px"/>
                            {/*Probably it would be better to make it a link,
                             in order to redirect to another page with a changed language, 
                             but at the moment it's just a dummy*/}
                            <button className="Laguage-change_button">Rus</button>
                        </div>
                </nav>
           </header>
}

export default DesktopHeader