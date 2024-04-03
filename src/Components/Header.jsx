import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { PiDiscordLogoFill } from "react-icons/pi";

function Header() {
  return (
  <>
  <MDBNavbar light bgColor='dark' className='md-6'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <PiDiscordLogoFill style={{fontSize:"30px",color:"purple"}}/>
           &nbsp; <h1 className='header text-white'>projectfair.com</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  </>
  )
}

export default Header
