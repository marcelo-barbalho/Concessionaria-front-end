import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {getUsersList} from '../../../store/userlist/userlist.action'
import UserForm from './userform'
import { userRemove } from "../../../store/user/user.action";
import CustomList from "../../list"


export default () => {
  
  
  const [modalShow, setModalShow] = useState(false);
  const[editUser, setEditUser]  = useState({})
  const dispatch = useDispatch()
  const usersState = useSelector((state) => state.userlist.all);

  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch,modalShow])
   

  return (
    <>
    {modalShow &&<UserForm user={editUser} setModalShow={setModalShow}/>}
     
      <CustomList columnsNames={[ "Ativo","Admin", "Usuário","Nome Completo","Email", "Data de Nascimento","Filial"]} 
      columns={["is_active","is_admin","username","fullname","email", "birthdate","company"]}
      list={usersState}
      editAction={(user)=>{setModalShow(true);setEditUser(user)}}
      deleteAction={(user)=>userRemove(user)}
      addAction={()=>setModalShow(true)}
      />

    </>
  );
};
