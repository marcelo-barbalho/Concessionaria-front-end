import React, {useState}from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

const User = () => {

const [modalShow, setModalShow] = useState(false);


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Novo Usuário
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Ex: Marta da Silva"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput3">
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="email" placeholder="Escolha um apelido" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Mínimo 6 caracteres" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput5">
              <Form.Label>Filial</Form.Label>
              <Form.Control type="text" placeholder="Ex:Barra da Tijuca" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput6">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" placeholder="ex: 15/11/1998" />
            </Form.Group>
          </Form>
          <Button onClick={()=> console.log('funcionando')}>Enviar</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Novo Usuário
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default User
