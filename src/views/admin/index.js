import React, {useState} from 'react'
import User from '../../components/adminpage/userlist'
import styled from 'styled-components'
import CarList from '../../components/carlist'

const AdminPage = () => {

  const [showList, setShowList] = useState("")

  const component = ()=> {
    switch (showList) {
      case 'userlist':
        return (<User/>)
      case 'carlist':
        return (<CarList/>)
      case 'branchlist':
        return (<h1>branchList</h1>)        
    
      default:
        break;
    }
  }

  return (
    <>
      <Dash>
      <ListButton onClick={() => {setShowList('carlist')}}>Lista de Carros</ListButton>
      <ListButton onClick={() => {setShowList('userlist')}}>Lista de usuários</ListButton>
      <ListButton onClick={() => {setShowList('branchlist')}}>Lista de concessionárias</ListButton>
        {component()}
      </Dash>
    </>
  )
}

export default AdminPage

const Dash = styled.div`

  min-height:100vh;
  /* background-color:red; */

`
const ListButton = styled.button`

  border:5px;
  padding:3px;
  margin-right:50px;
  border-radius:3px;
  background-color: #ccc;
  :hover{
    background-color:#fff;
  }
  
  /* background-color:red; */

`
