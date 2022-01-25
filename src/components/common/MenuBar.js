import React from 'react'
import { Container, Nav, Image, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from "../../assets/img/logo.png";
import { RiHome4Line, RiHeadphoneLine, RiInformationLine, RiShape2Fill } from "react-icons/ri";

const MenuBar = () => {

    return (
        <Navbar expand="lg" className="menubar">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">  <RiHome4Line />Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">   <RiShape2Fill />Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">   <RiInformationLine />About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">    <RiHeadphoneLine />Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuBar




