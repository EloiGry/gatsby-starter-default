import * as React from "react"
import NavBarPhone from "./NavBarPhone"
import NavBarLapTop from "./NavBarLapTop"
import MediaQuery from 'react-responsive'

const Header = () => { 
    return (
        <>
            <MediaQuery maxWidth={600}> 
                <NavBarPhone />
            </MediaQuery>
            <MediaQuery minWidth={600} >
                <NavBarLapTop />
            </MediaQuery>
        </>

    )
}


export default Header

