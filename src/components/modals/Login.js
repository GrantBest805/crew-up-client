import React from "react"
import { Modal, Form, Button } from "semantic-ui-react"

const Login = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <Modal open={modalIsOpen} closeIcon onClose={() => setModalIsOpen(false)}>
      <Modal.Header style={{ alignItems: 'center'}}>Login</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input type='email' placeholder='example' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='password' />
          </Form.Field>
          <Button>Submit Button</Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default Login
