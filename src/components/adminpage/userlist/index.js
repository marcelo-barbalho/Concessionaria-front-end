import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {getUsersList} from '../../../store/userlist/userlist.action'
import UserForm from './userform'
import {Button} from 'react-bootstrap'
import { userRemove } from "../../../store/user/user.action";

export default () => {
  
  
  const [modalShow, setModalShow] = useState(false);
  const[editUser, setEditUser]  = useState({})
  const dispatch = useDispatch()
  const usersState = useSelector((state) => state.userlist.all);

  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch])
   
  const MountUserList = () =>
    usersState.map((user,i)=>(
        <tr key={i}>
          <td>{user.is_active ? "icone de sim":"icone de não"}</td>
          <td>{user.is_admin ? "icone de sim":"icone de não"}</td>
          <td>{user.username}</td>
          <td>{user.fullname}</td>
          <td>{user.email}</td>
          <td>{user.birthdate}</td>
          <td>{user.company}</td>
          <td><button onClick={()=>{setModalShow(true);setEditUser(user)}}>Edit</button>/<button onClick={()=>userRemove(user)} >Delete</button></td>
        </tr>
  ))

  return (
    <>
    
    {modalShow &&<UserForm user={editUser} setModalShow={setModalShow}/>}
      <CustomUserList>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Novo Usuário
      </Button>
          
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Admin</th>
              <th>Usuário</th>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>Data de Nascimento</th>
              <th>Filial</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <MountUserList/>         
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



