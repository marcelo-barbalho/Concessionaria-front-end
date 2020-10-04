import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "react-bootstrap";

export default () => {
  return (
    <>
      <Footer>
        <TecInfo>
          Em caso de problemas entrat em contato com: (00)0000-0000 ou
          (00)00000-0000
        </TecInfo>
        <CopyFooter>Todos os direitos reservados.</CopyFooter>
      </Footer>
    </>
  );
};

const Footer = styled.div`
  width: 100%;
`;

const TecInfo = styled.div`
  color: black;
`;

const CopyFooter = styled.div`
  text-align: center;
  border-top: 2px solid black;
  padding: 2px;
  color: black;
`;
