import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Link } from 'gatsby';

const Navigation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
position: relative;
`
const NavMap = styled.div`
display: flex;`

const P = styled.p`
margin : 0px 10px;`

const L = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 20px;
font-weight: 800;`

const H1 = styled.h1`
color: #fff;`

const NavBarLapTop = () => {
    console.log(menuData);
    return (
        <Navigation>
            <H1>Trippy</H1>
            <NavMap>
                {menuData.map(element => 
                    <L to={element.Link}> <P> {element.title} </P> </L>
                )}
            </NavMap>    
        </Navigation>
    );
};

export default NavBarLapTop;