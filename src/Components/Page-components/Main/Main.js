import React from 'react';
import MainPageSwitcher from '../../Logic-components/MainPageSwitcher/MainPageSwitcher';
import MainPageRoots from '../../Roots-components/MainPageRoots/MainPageRoots';







import './Main.css'

const Main = ( ) =>{



    return <main className="Main-page_block">
                    <div className="Main-page_roots">
                        {/* <MainPageRoots/> */}
                        <MainPageSwitcher/>
                    </div>              
           </main>
}

export default Main