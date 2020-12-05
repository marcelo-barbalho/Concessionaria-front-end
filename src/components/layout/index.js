import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import image5 from '../../assets/images/chiron-bgc.jpg'


export default ({ children }) => {
  return (
   
    <Background>
      <ContainerLayout>
        <Header />
      
      {children}
      
      </ContainerLayout>
      <Footer />
    </Background>

  );
};

const ContainerLayout = styled.div`
min-height:80vh;
  /* max-width:2200px; */

`;
const Background = styled.div`
background:url(${image5}) no-repeat center;
background-size:cover;
background-attachment:fixed;
min-height:100vh;
`