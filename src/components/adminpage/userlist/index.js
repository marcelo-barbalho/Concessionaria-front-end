import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Table} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {getUsers} from '../../../store/userlist/userlist.action'
import UserForm from './userform'
import {Button} from 'react-bootstrap'

export default () => {
  
  
const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
   


  return (
    <>
    
    {modalShow &&<UserForm  setModalShow={setModalShow}/>}
      <CustomUserList>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Novo Usuário
      </Button>
          
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
      </CustomUserList>
    </>
  );
};

const CustomUserList = styled.div`
  /* background: orange;
  width: 100%; */
`;



