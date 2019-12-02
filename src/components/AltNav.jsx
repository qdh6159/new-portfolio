import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
//   NavbarText
} from 'reactstrap';

const AltNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div id="bg-light">
      <Navbar id="bg-light" color="dark" dark  expand="md">
        <NavbarBrand href="/"> 🌴Quincy Hicks<span class="full">⬆ Full Stack Engineer ⬇</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#bazinga">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#bazinga2">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#bazinga3">Contact</NavLink>
            </NavItem>
            
          </Nav>
          {/* <p>Simple Text</p> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AltNav;