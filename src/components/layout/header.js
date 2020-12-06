import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {isAuthenticated, removeToken } from "../../config/auth";


export default () => {
  const logout = () => {
    removeToken()
  }
  const menu = [
    {
      title: `${isAuthenticated()?"Admin":""}`,
      link: `${isAuthenticated()?"/admin":""}`,
      icon: "",
    },
    {
      title: "Home",
      link: "",
      icon: "",
    },
    {
      title: "Carros",
      link: "carlist",
      icon: "",
    },
    {
      title: "Filiais",
      link: "branches",
      icon: "",
    },
    {
      title: `${isAuthenticated()?"Sair":"Login"}`,
      link: `${isAuthenticated()?"/":"login"}`,
      icon: "",
      action:()=>logout()
    },
    
  ];
  
  return (
    
      <Header>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="#home">Logomarca</Navbar.Brand>
              <Navbar.Brand href="#home">Aurum Motors</Navbar.Brand>
              <Navbar.Brand href="#home">Art & Luxury</Navbar.Brand>
              <MenuMobile className="justify-content-end">
      
              <MenuDesk>
                  {menu.map((item, i) => (
                    <Link to={item.link} key={i}>
                      <Nav.Link onClick={item.action} as="div">{item.title}</Nav.Link>
                    </Link>
                  ))}
                </MenuDesk> 
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="justify-content-end"
                    id="dropdown-basic"
                    >
                    Menu
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {menu.map((item, i) => (
                      <Link to={item.link} key={i}>
                        <Nav.Link as="div">{item.title}</Nav.Link>
                      </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </MenuMobile>
          </Container>
        </Navbar>
      </Header>
   
  );
};

const Header = styled.header`
  width: 100%;
`;
const MenuMobile=styled(Navbar.Collapse)`
.dropdown{
@media (min-width:500px){
  display:none;
}}
`;
const MenuDesk=styled(Nav)`
&.navbar-nav .nav-link{
  color:goldenrod;
}
@media (max-width:500px){
  display:none;
}
`;