import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

export default ({ children }) => {
  return (
    <>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      {children}
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </>
  );
};

const ContainerHeader = styled.div``;
const ContainerFooter = styled.div``;
