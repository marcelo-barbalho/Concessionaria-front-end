import React, { useEffect, useState} from "react";
import CarForm from './carform'
import { useDispatch, useSelector } from "react-redux";
import {getCarList, removeCar} from '../../store/carlist/carlist.action'
import CustomList from "../list"

function CarList () {

  const [modalShow, setModalShow] = useState(false);
  const [editCar, setEditCar]  = useState({})
  const dispatch = useDispatch()  
  const carsState=useSelector((state) => state.carlist.all);
  

  useEffect(() => {
     dispatch(getCarList())
  }, [dispatch, modalShow])
   
 
  return (
    <>
     {modalShow && <CarForm user={editCar} setModalShow={setModalShow}/>}

      <CustomList columnsNames={["Novo","Marca","Modelo","Ano","Combustível","Cor","Localidade"]} 
      columns={["carstatus","brand","carmodel","year","fueltype","color","location"]}
      list={carsState}
      editAction={(car)=>{setModalShow(true);setEditCar(car)}}
      deleteAction={(car)=>removeCar(car)}
      addAction={()=>setModalShow(true)}
      />
      
</>
  );
};

export default CarList



// const [modalShow, setModalShow] = useState(false);


// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Novo Usuário
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="name@example.com" />
//             </Form.Group>
//             <Form.Group controlId="exampleForm.ControlSelect1">
//               <Form.Label>Example select</Form.Label>
//               <Form.Control as="select">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="exampleForm.ControlSelect2">
//               <Form.Label>Example multiple select</Form.Label>
//               <Form.Control as="select" multiple>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="exampleForm.ControlTextarea1">
//               <Form.Label>Example textarea</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   )
// }
