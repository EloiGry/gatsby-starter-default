import React from 'react';
import styled from 'styled-components';
import IconHamburger from './IconHamburger';
import { IconContext } from 'react-icons/lib';

const Navigation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
position: relative;
`
const H1 = styled.h1`
color: #fff;`

const NavBarPhone = () => {
    return (
        <Navigation>
            <H1> Trippy </H1>
            <IconContext.Provider
                value={{ color: 'white'}}
            >
                <IconHamburger/>
            </IconContext.Provider>
        </Navigation>
    );
};

export default NavBarPhone;