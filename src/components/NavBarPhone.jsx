import React from 'react';
import styled from 'styled-components';
import IconHamburger from './IconHamburger';

const Navigation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: blueviolet;
padding: 20px;
`

const NavBarPhone = () => {
    return (
        <Navigation>
            <h1> Trippy </h1>
            <IconHamburger/>
        </Navigation>
    );
};

export default NavBarPhone;