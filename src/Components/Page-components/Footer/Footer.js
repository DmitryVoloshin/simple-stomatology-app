import React from 'react'
import { MainLogoIcon,PhoneIcon } from '../../Icons/Icons'


import './Footer.css'

const Footer = ( ) =>{
    
    const footerNavLinks = ['О нас','Услуги','Прайс','Новости','Контакты']
    .map((item,idx)=>{ 
        return <li className="footer-links_item" key={idx}>
                    <a href={item} className="footer-links">{item}</a>
               </li>
    })


    return <footer className="page-footer_block" >
                <div className="footer-block_info">
                    <div className="footer-info_logo">
                        <MainLogoIcon logoSize="45px"/>
                        <span>
                            <h4>Astra Dent</h4>
                            <p>Labaratory</p>
                        </span>
                    </div>
                    <ul className="footer-links_block">
                        {footerNavLinks}
                    </ul> 
                </div>
                <div className="get-call_block">
                    <span className="call-block_phone">
                        <PhoneIcon/>
                        <p>(044) 222 33 33</p>
                    </span>
                    <button className="footer-button_green">Заказать звонок</button>
                    <button className="footer-button_white">Заказать услугу</button>
                </div>


                <div className="copyright">

                </div>
               
           </footer>
}

export default Footer