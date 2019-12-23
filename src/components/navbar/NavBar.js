import React, { useState } from "react"
import { Menu, Segment, Container, Button } from "semantic-ui-react"
import { NavLink } from "react-router-dom"
import Login from "../modals/Login"

const NavBar = ({ fixed, children }) => {
  const [activeItem, setActiveItem] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  return (
    <Segment
      inverted={!fixed}
      textAlign='center'
      style={{ minHeight: 700, padding: "1em 0em" }}
      vertical
    >
      <Menu
        fixed={fixed ? "top" : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container>
          <Menu.Item
            as={NavLink}
            to='/'
            name='home'
            active={activeItem === "home"}
            onClick={() => setActiveItem("home")}
          />
          <Menu.Item
            as={NavLink}
            to='/users'
            name='profile'
            active={activeItem === "profile"}
            onClick={() => setActiveItem("profile")}
          />
          <Menu.Item
            as={NavLink}
            to='/company'
            name='company'
            active={activeItem === "company"}
            onClick={() => setActiveItem("company")}
          />
          <Menu.Item position='right'>
            <Button as='a' inverted={!fixed} onClick={handleOpenModal}>
              Log in
            </Button>
            <Button
              as='a'
              inverted={!fixed}
              primary={fixed}
              style={{ marginLeft: "0.5em" }}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
      <Login modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      {children}
    </Segment>
  )
}

export default NavBar
