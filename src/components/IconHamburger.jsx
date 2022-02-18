import React from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi'

const IconHamburger = ({height, width}) => {
    return (
        <Bars 
        height= {height}
        width={width} 
        />
    );
};

export default IconHamburger;

const Bars = styled(GiHamburgerMenu)`
cursor: pointer;
height:${(props) => props.height ? props.height : "30px"};
width:${(props) => props.width ? props.width : "40px"};`


