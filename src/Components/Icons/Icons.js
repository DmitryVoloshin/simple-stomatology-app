import React from 'react';
//Icons imports
import { AiOutlineRight } from "react-icons/ai";
import { FaInstagram } from 'react-icons/fa';
import { SiActigraph } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const BreadCrumbsRight = ( ) =>{
    return(
        <AiOutlineRight size="10px"
    />
    )
}
const InstaIcon = ( {sizeInpPixels} ) =>{
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
const MainLogoIcon = ( {logoSize} ) =>{
    return(
        <a href="#">
            <SiActigraph size={logoSize}
                color="rgb(118, 173, 80)"
            />
        </a>
    )
}
const PhoneIcon = ( ) =>{
    return(
        <a href="#">
        <FaPhoneAlt size="45px"
            color="rgb(118, 173, 80)"
        />
    </a>
    )
}


export  {BreadCrumbsRight,InstaIcon,MainLogoIcon,PhoneIcon}
