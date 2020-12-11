import React, { useEffect, useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBranches } from '../../store/branchlist/branchlist.action'
import {getCarList} from '../../store/carlist/carlist.action'
import styled from 'styled-components'

const BranchMain = () => {
    const [form, setForm]= useState({})
    const [showlist, setShowList] =useState(false)

    const dispatch = useDispatch()

    const handleChange = (attr) => {
        const {value, name} = attr.target
        setForm({
          ...form,
          [name]:value
        })
        return
      }
    
    useEffect(()=>{
        dispatch(getBranches())
        dispatch(getCarList())
    },[dispatch])
    const branches = useSelector(state => state.branchlist.all)
    const cars = useSelector(state => state.carlist.all)

    

    const MountList = ()=>
        cars.filter(car => car.location === form.location).map((item, i)=>{
            console.log(item)
        return <tr key={i}>
        <td>{item.brand}</td>
        <td>{item.carmodel}</td>
        <td>{item.year}</td>
        <td>{item.fueltype}</td>
        <td>{item.color}</td>
        </tr>
        }

        )
        // return console.log(cars.filter(car => car.location === form.location)) 
         
            
        
     const selectedBranch = branches.find(branch => branch._id === form.location)

  return (
    <>
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput9">
            <Form.Label>Filial</Form.Label>  
            <Form.Control as="select"  onChange={handleChange} value={branches._id} size="sm" name="location" custom>{branches.map((local, i) => <option key ={i} value={local._id} >{local.fakename}</option>
        )}</Form.Control>
        </Form.Group>
      </Form>
        <div>Endereço:{selectedBranch?.adress}</div>
      <Button onClick={()=>setShowList(true)}>Buscar</Button>
     
      {showlist && 
        <CustomList>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>marca</th>
                <th>modelo</th>
                <th>ano</th>
                <th>combustível</th>
                <th>cor</th>
            </tr>
            </thead>

            <tbody>
                {MountList()}
            </tbody>
        </Table>
        </CustomList>}
    </Container>
    </>
  )
}

export default BranchMain

const CustomList = styled.div`
width:90%;
margin:auto;
overflow:overlay;
padding-bottom:2em;

`;
const Button = styled.button`
background-color: goldenrod;
padding:0 3px;
border-radius:5px;
border: none;
:first-child{
    margin-right: 5px;}


`
