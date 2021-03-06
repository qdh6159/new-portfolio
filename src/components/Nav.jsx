import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
} from 'reactstrap';

const MyNav = (props) => {
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div >
      <nav class="myNav">
      <div class="myLogo">
        <img src="https://raw.githubusercontent.com/qdh6159/new-portfolio/master/images/IMG_0143.jpeg" alt="Card image cap" class="meMoji"></img>

      </div>
          <div class="myName">
            <h2 class="navName">Quincy Hicks</h2>
            <p>Full Stack Engineer</p>
          </div>
      </nav>
    </div>
  );
}

export default MyNav;


{/* <Navbar color="none" light class="myNav">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        {/* <NavbarBrand href="/" className="mr-auto">Q U I N C Y  H I C K S</NavbarBrand> */}
        // <h3>Portfolio Site | Quincy Hicks</h3>
        {/* <p id="contact"> CONTACT</p> */}

        // <Collapse isOpen={!collapsed} navbar>
        //   <Nav navbar>
        //     <NavItem>
        //       <NavLink href="/components/">Components</NavLink>
        //     </NavItem>
        //     <NavItem>
        //       <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        //     </NavItem>
        //   </Nav>
        // </Collapse>
    //   </Navbar> 