import React from 'react';
import { MainLogoIcon,PhoneIcon,InstaIcon } from '../../../Icons/Icons';

import './DesktopHeader.css'

const DesktopHeader = ( ) =>{
    
    const navLinks = ['О нас','Услуги','Прайс','Новости','Контакты']
        .map((item,idx)=>{ 
            return <li className="header-links_item" key={idx}>
                        <a href={item}>{item}</a>
                   </li>
        })

    return <header className="desktop-header_nav">
                <nav className="header-nav_block">
                    <MainLogoIcon logoSize ="35px"/>
                        <div className="header-logo_name">
                            <h2>Astra Dent</h2>
                            <p>Labaratory</p>
                        </div>
                        <ul className="desktop-header_links">
                            {navLinks}
                        </ul>
                        <div className="desktop-header_buttons">
                            <button className="header-buttons_green">Заказать услугу</button>
                            <button className="header-buttons_white">Заказать Звонок</button>
                        </div>
                        <div className="desktop-another_block">
                            <div className="another-block_phone">
                                <PhoneIcon/>
                                <p>(044)<b> 222 33 33</b></p>
                            </div>
                            <InstaIcon sizeInpPixels="32px"/>
                            {/*Probably it would be better to make it a link,
                             in order to redirect to another page with a changed language, 
                             but at the moment it's just a dummy*/}
                            <button className="laguage-change_button">Rus</button>
                        </div>
                </nav>
           </header>
}

export default DesktopHeader