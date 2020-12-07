import React from "react";
import styled from "styled-components";
import {Container} from 'react-bootstrap';
import {FaWhatsappSquare,FaFacebookSquare, FaTelegram, FaPhoneSquare} from 'react-icons/fa'

export default () => {
  return (
   
      <Footer>
        <Container>
          
          <FaWhatsappSquare/><FaFacebookSquare/><FaTelegram/><FaPhoneSquare/>
       
        <CopyFooter>Copyright 2020 - Todos os direitos reservados. Aurum Motors S/A</CopyFooter>
        </Container>
      </Footer>
  
  );
};

const Footer = styled.footer`
  width: 100%;
  padding: 2px;
  background-color:#201E27;
  color:#fff;
  padding:1em 0;
  text-align:center;
  >svg{
    font-size:2em;
    color:goldenrod;
    margin-right:1em;
    margin-bottom:0.5em;
    cursor:pointer;
    &:hover{
transform:scale(1.1);
    }
  }
`;

const CopyFooter = styled.div`
  text-align: center;
  border-top: 2px solid black;
  padding: 2px;
 
`;
