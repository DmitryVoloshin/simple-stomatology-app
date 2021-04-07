import React from "react";

import { SiActigraph } from "react-icons/si";

const MainLogoIcon = ( {logoSize} ) =>{
    return(
        <a href="#">
            <SiActigraph size={logoSize}
                // style={}
                color="rgb(118, 173, 80)"
            />
        </a>
    )
}

export default MainLogoIcon