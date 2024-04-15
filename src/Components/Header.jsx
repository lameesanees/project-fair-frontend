import React, { useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { PiDiscordLogoFill } from "react-icons/pi";

function Header() {
  const[token,setToken]=useState("false")
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"));
      setToken(true)
    }
    else{
      setToken(false)
    }
  })
  return (
  <>
  {
    token?
    <MDBNavbar light bgColor='dark' className='md-6'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <PiDiscordLogoFill style={{fontSize:"30px",color:"purple"}}/>
           &nbsp; <h1 className='header text-white'>projectfair.com</h1>
          </MDBNavbarBrand>
          <h1>logout</h1>
        </MDBContainer>
      </MDBNavbar>
      :
      <MDBNavbar light bgColor='dark' className='md-6'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <PiDiscordLogoFill style={{fontSize:"30px",color:"purple"}}/>
           &nbsp; <h1 className='header text-white'>projectfair.com</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  }
  </>
  )
}

export default Header
