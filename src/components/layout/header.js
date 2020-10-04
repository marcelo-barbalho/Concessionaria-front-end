import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  const menu = [
    {
      title: "Home",
      link: "",
      icon: "",
    },
    {
      title: "Lista",
      link: "list",
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
      title: "Sair",
      link: "login",
      icon: "",
    },
  ];
  return (
    <>
      <Header>
        <Navbar bg="light">
          <Navbar.Brand href="#home">Concessionária sem nome</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
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
            {/* <Nav>
              {menu.map((item, i) => (
                <Link to={item.link} key={i}>
                  <Nav.Link as="div">{item.title}</Nav.Link>
                </Link>
              ))}
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </Header>
    </>
  );
};

const Header = styled.div`
  width: 100%;
`;
