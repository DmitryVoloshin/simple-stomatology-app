import React from 'react';

import './DesktopHeader.css'

const DesktopHeader = ( ) =>{



    return <header className="Desktop-header_nav">
                <div>
                    <h3>Astra Dent</h3>
                    <p>Labaratory</p>
                </div>
                <ul className="Desktop-header_links">
                    <li>О нас</li>
                    <li>Услуги</li>
                    <li>Прасй</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </ul>
                <div>
                    <button>Заказать услугу</button>
                    <button>Заказать Звонок</button>
                </div>
                <div className="Desktop-another_block">
                    <div className="Another-block_phone">
                        <i>phoneicon</i>
                        <p>(044)<b>222 33 33</b></p>
                    </div>
                    <i>Insta</i>
                    <button>Rus</button>
                </div>
           </header>
}

export default DesktopHeader