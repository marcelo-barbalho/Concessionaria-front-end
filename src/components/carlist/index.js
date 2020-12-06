import React, { useEffect} from "react";
import styled from "styled-components";
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {getCarList} from '../../store/carlist/carlist.action'

function CarList () {


  const dispatch = useDispatch()  
  const carsState=useSelector((state) => state.carlist.all);
  

  useEffect(() => {
     dispatch(getCarList())
  }, [dispatch])
   
  
  const MountList = () =>
    carsState.map((cars,i)=>(
        <tr key={i}>
          <td>{cars.carstatus ? "Novo":"Usado"}</td>
          <td>{cars.brand}</td>
          <td>{cars.carmodel}</td>
          <td>{cars.year}</td>
          <td>{cars.fueltype}</td>
          <td>{cars.color}</td>
          <td>{cars.location}</td>
        </tr>
  ))

  return (
    <>
      <button onClick={()=>console.log(carsState)} >teste</button>
      <CustomCarList>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Combustível</th>
              <th>Cor</th>
              <th>Localidade</th>
            </tr>
          </thead>
          <tbody>
          <MountList/>
          {/* {carsState.map((cars)=>(
        <tr>
          <td>{cars.carstatus ? "Novo":"Usado"}</td>
          <td>{cars.brand}</td>
          <td>{cars.carmodel}</td>
          <td>{cars.year}</td>
          <td>{cars.fueltype}</td>
          <td>{cars.color}</td>
          <td>{cars.location}</td>
        </tr>
  ))} */}
          </tbody>
        </Table>
      </CustomCarList>
    </>
  );
};

export default CarList

const CustomCarList = styled.div`
  /* background: orange;
  width: 100%; */
`;


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
