

import React from "react";
import { FaInstagram } from 'react-icons/fa';



const InstaIcon = ( {sizeInpPixels} ) =>{

    // Time for bad practice
 const cssStyle = {
     color : 'gray',
     margin: '0 10px'
 };


    return(
        <a href="#">
            <FaInstagram size={sizeInpPixels}
               style={cssStyle}
            />
        </a>
    )
}

export default InstaIcon

