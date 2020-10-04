import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <>
      <CustomCarList>Car list</CustomCarList>
    </>
  );
};

const CustomCarList = styled.div`
  background: orange;
  width: 100%;
`;
