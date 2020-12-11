import React, { useEffect, useState} from "react";
import CarForm from './carform'
import { useDispatch, useSelector } from "react-redux";
import {getCarList, removeCar} from '../../store/carlist/carlist.action'
import CustomList from "../list"
import { getBranches } from "../../store/branchlist/branchlist.action";

function CarList () {

  const [modalShow, setModalShow] = useState(false);
  const [editCar, setEditCar]  = useState({})
  const dispatch = useDispatch()  
  const carsState=useSelector((state) => state.carlist.all)
  
  
  useEffect(() => {
     dispatch(getCarList())
     dispatch(getBranches())
     
  }, [dispatch, modalShow])
   
 
  return (
    <>
     {modalShow && <CarForm user={editCar} setModalShow={setModalShow}/>}

      <CustomList columnsNames={["Novo","Marca","Modelo","Ano","Combustível","Cor"]} 
      columns={["carstatus","brand","carmodel","year","fueltype","color"]}
      list={carsState}
      editAction={(car)=>{setModalShow(true);setEditCar(car)}}
      deleteAction={(car)=>removeCar(car)}
      addAction={()=>{setEditCar({}); setModalShow(true)}}
      />
      
</>
  );
};

export default CarList


