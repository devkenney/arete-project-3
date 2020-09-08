import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

import './Footer.css';

function Footer(props) {
    return <Navbar bg="dark" className="text-white" fixed="bottom">Data provided by Marvel. © 2014 Marvel</Navbar>
}

export default Footer;