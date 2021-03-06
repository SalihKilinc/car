import React from 'react';
import {  Button, Dropdown, DropdownButton } from 'react-bootstrap'
import {  FiUser } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useStore } from "../../store";
import { logout } from "../../store/user/userActions";
import alirtify from "alertifyjs";

const UserMenu = () => {


    const { userState , dispatchUser } = useStore();
    const { user, isUserLogin } = userState;


    const handleLogout = () => {
alirtify.confirm(
    "Logout",
    "Are you sure you want to logout",
    () => {
        dispatchUser(logout());
        localStorage.removeItem("token");

    },
    () => {
console.log("canceled");
    }
)}


    

  return (

  <>
{isUserLogin ? <DropdownButton id="dropdown-basic-button" 
                                title={`${user.firstName} ${user.lastName}`}
                                    size="sm"
                                    align="end"
                                    
                                    >
                                    <Dropdown.Item as ={Link} to="/reservations">Reservation</Dropdown.Item>
                                    <Dropdown.Item as ={Link} to="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item onClick = {handleLogout}>Logout</Dropdown.Item>

                                    
                                </DropdownButton> : <Button as={Link} size="sm" to="/login">
                                    <FiUser /> Login
                                </Button>}

  </>
  )};

export default UserMenu;
