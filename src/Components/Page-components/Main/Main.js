import React from 'react';
import MainPageSwitcher from '../../Logic-components/main-page-switcher/MainPageSwitcher';








import './Main.css'

const Main = ( ) =>{


    return <main className="main-page_block">
                    <div className="main-page_roots">
                        <MainPageSwitcher/>
                    </div>              
           </main>
}

export default Main