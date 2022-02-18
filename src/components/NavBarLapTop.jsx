import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Link } from 'gatsby';

const Navigation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: blueviolet;
padding: 20px;
`
const NavMap = styled.div`
display: flex;`

const P = styled.p`
margin : 0px 5px;`

const L = styled(Link)`
text-decoration: none;
color: black`

const NavBarLapTop = () => {
    console.log(menuData);
    return (
        <Navigation>
            <h1>Trippy</h1>
            <NavMap>
                {menuData.map(element => 
                    <L to={element.Link}> <P> {element.title} </P> </L>
                )}
            </NavMap>    
        </Navigation>
    );
};

export default NavBarLapTop;