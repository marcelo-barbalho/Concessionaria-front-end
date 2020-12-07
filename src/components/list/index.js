import React from "react";
import styled from "styled-components";
import {Table} from 'react-bootstrap'
import {FiEdit,FiTrash2} from 'react-icons/fi'

export default (props) => {
  const {columnsNames,columns,list,editAction,deleteAction,addAction}=props

  return (
    <>
      <CustomList>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {columnsNames.map((column,index)=><th key={index}>{column}</th>)}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item,i)=>(
        <tr key={i}>
       {columns.map((key,i)=><td key={i}>
        {typeof item[key]==="boolean"?
          (item[key]?"Sim":"Não")
          :item[key]}</td>) }
       <td><button onClick={()=>editAction(item)}><FiEdit/></button><button onClick={()=>deleteAction(item)} ><FiTrash2/></button></td>
        </tr>
  ))}
          </tbody>
          </Table>
          <button onClick={addAction}>Adicionar</button>
      </CustomList>
    </>
  );
};


const CustomList = styled.div`
width:90%;
margin:auto;
overflow:overlay;
padding-bottom:2em;


button{
  background-color: goldenrod;
  padding:0 3px;
  border-radius:5px;
  border: none;
  :first-child{
    margin-right: 5px;
  }
}
>button{
  padding:0.5em;
}

`;
