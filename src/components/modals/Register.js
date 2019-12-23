import React from "react"
import { Modal, Form, Button } from "semantic-ui-react"

const Register = () => {
  return (
    <Modal>
      <Modal.Header>Register</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input type='text' placeholder='name'/>
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default Register
