"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import LanguageIcon from "@mui/icons-material/Language";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Stack } from "@mui/material";
import "./nav.css"

export default function Naav() {
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container id="navbar-container"  style={{zIndex:7 ,position:"relative" }}>
       <NavDropdown
            title={<LanguageIcon/>}
            id="language-dropdown"
            style={{ color: "#fff"}}
          >
            <NavDropdown.Item href="#action/3.1">Arabic</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
          </NavDropdown>
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav  className="mx-auto">
      
          <Nav.Link href="#pricing">
            <Button className="d-none d-md-block"
              style={{
                backgroundColor: "#00695f",
                padding: "10px 22px",
                fontSize: "1rem",
                color: "#fff",
                border: "none",
                borderRadius: 3,
              }}
              variant="contained"
            >
              تسجيل الدخول
            </Button>
          </Nav.Link>
      
        </Nav>
        

      </Navbar.Collapse>
      <Stack sx={{flexDirection:"row", justifyContent:"center",alignItems:"center",gap:2}}>
      <img src="icons/logoAr.svg" style={{ float: "right" ,width:"70%" }} />

      <NavDropdown
            title={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="39" height="39" rx="15.5" stroke="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H15C14.5858 16.75 14.25 16.4142 14.25 16ZM14.25 20C14.25 19.5858 14.5858 19.25 15 19.25H25C25.4142 19.25 25.75 19.5858 25.75 20C25.75 20.4142 25.4142 20.75 25 20.75H15C14.5858 20.75 14.25 20.4142 14.25 20ZM20 23.25C19.5858 23.25 19.25 23.5858 19.25 24C19.25 24.4142 19.5858 24.75 20 24.75H25C25.4142 24.75 25.75 24.4142 25.75 24C25.75 23.5858 25.4142 23.25 25 23.25H20Z" fill="white"></path></svg>}
            id="home-dropdown"
            style={{ color: "#fff" }}
          >
            <NavDropdown.Item href="#action/3.1">الرئيسية </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">المعرض </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">جائزة المنتدى</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">فعاليات السعودية </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5"> تسجيل الدخول </NavDropdown.Item>
          </NavDropdown>
          </Stack>

    </Container>
  </Navbar>
  );
}

{
  /* <div style={{borderRadius:"10px",textAlign:"right" }}>
  <NavDropdown.Item   href="#action/3.1">الرئيسية</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">المعرض</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">جائزة المنتدى</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">فعاليات السعودية</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">تسجيل الدخول</NavDropdown.Item>
</div> */
}
