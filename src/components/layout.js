import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Video from "./Video"
import styled from "styled-components"

const Layout = ({ children }) => {
  
  return (
    <>
    <GlobalStyle />
    <Container>
      <Header/>
      <Video/>
    </Container>
        <main>{children}</main>
    </>
  )
}


export default Layout

const Container = styled.div`
height: 100vh;
width: 100vw;`