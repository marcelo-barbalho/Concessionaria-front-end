import React, { useEffect } from "react";
import styled from "styled-components";
import {Table} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {getCarList} from '../../store/carlist/carlist.action'

export default () => {
  
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCarList())
  }, [dispatch])
   


  return (
    <>
      <CustomCarList>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </CustomCarList>
    </>
  );
};

const CustomCarList = styled.div`
  /* background: orange;
  width: 100%; */
`;
