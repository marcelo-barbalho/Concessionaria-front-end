import React, { useState } from "react";
import styled from "styled-components";
import {Table} from 'react-bootstrap'

export default () => {

  // const [carList, setCarList]  = useState([])

//   useEffect(()=> {
//     let get = async () => { 
//         const p = await getProducts()
//           setProducts(p.data)
//       }
//     if (!refresh) {
//         get()
//     }

//     return () => get =() =>{}

// }, [refresh])


  return (
    <>
      <CustomCarList>
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
      </CustomCarList>
    </>
  );
};

const CustomCarList = styled.div`
  /* background: orange;
  width: 100%; */
`;
