import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

import '../assets/css/navbar.css';
const CustomNavbar = () => {
return (

    <Navbar className=' px-5 ' bg="secondary" expand="lg" id='navbar'>
        <Navbar.Brand href="/" className=' d-flex justify-content-between w-100'id='nav'>
            <h1 className='logo'>Roomera</h1>
            <Form className=" d-flex  gap-5 w-75" id='form'>
                <FormControl type="search" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark">Search</Button>
            </Form>
        </Navbar.Brand>
    </Navbar>
);
}

export default CustomNavbar;
