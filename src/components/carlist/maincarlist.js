import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBranches } from '../../store/branchlist/branchlist.action'
import { getCarList } from '../../store/carlist/carlist.action'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'

const MainCarList = () => {

    const dispatch = useDispatch()  
    const carsState=useSelector((state) => state.carlist.all)
    const branchState=useSelector((state) => state.branchlist.all)
  
  
  useEffect(() => {
     dispatch(getCarList())
     dispatch(getBranches())
     
  }, [dispatch])

  
  const branchName = (car) => branchState.filter(branch => car.location === branch._id).map((item)=>item.fakename)

  return (
    <>
        {carsState.map((car, i)=>       
        <CardContainer key={i}>
        <Card.Img variant="top" src={car.photo} />
        <Card.Body>
          <Card.Title>{car.carmodel}</Card.Title>
            <Card.Text>{car.carmodel}              
            </Card.Text>
            <Card.Text >{branchName(car)}              
            </Card.Text>
          </Card.Body>
          <button onClick={()=> console.log(branchName(car)
            )} >teste</button>
        </CardContainer>               
        )}
    </>
  )
}

export default MainCarList

const CardContainer = styled(Card)`
    display:flex;
    flex-direction:row;
    width:35%;
    height:200px;

`
