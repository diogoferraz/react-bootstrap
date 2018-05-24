import React, { Component } from 'react';
import { Nav, NavItem, Navbar, MenuItem, NavDropdown, Glyphicon, Row, Col, Dropdown } from 'react-bootstrap';
import CustomToggle from "./components/custom-toggle";
import CustomMenu from "./components/custom-menu";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Pancake World PW1230</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="Dropdown1" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={3} title="Dropdown2" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={3} title="Dropdown3" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className="show-grid">
          <Col lgHidden mdHidden md={12}>
          <Dropdown id="dropdown-custom-menu">
                  <CustomToggle bsRole="toggle"><Glyphicon glyph="plus" /></CustomToggle>
                  <CustomMenu bsRole="menu">
                    <MenuItem eventKey="1">Red</MenuItem>
                    <MenuItem eventKey="2">Blue</MenuItem>
                    <MenuItem eventKey="3" active>
                      Orange
                    </MenuItem>
                    <MenuItem eventKey="1">Red-Orange</MenuItem>
                  </CustomMenu>
                </Dropdown>  
            <Nav bsStyle="pills">
              <NavItem eventKey={2} title="Item">
                <Glyphicon glyph="plus" />
              </NavItem>
              <NavItem eventKey={2} title="Item">
                <Glyphicon glyph="th" />
              </NavItem>
              <NavItem eventKey={3}>
                <Glyphicon glyph="trash" />
              </NavItem>
              <NavItem eventKey={4}>
                <Glyphicon glyph="search" />
              </NavItem>
              <NavItem eventKey={5}>
                <Glyphicon glyph="filter" />
              </NavItem>
              <NavItem eventKey={6}>
                <Glyphicon glyph="fullscreen" />
              </NavItem>
              <NavItem eventKey={7}>
              <Glyphicon glyph="pencil" />
              </NavItem>
              <NavItem eventKey={8}>
              <Glyphicon glyph="step-backward" />
              </NavItem>
              <NavItem eventKey={9}>
              <Glyphicon glyph="step-forward" />
              </NavItem>
            </Nav>
          </Col>
          <Col xsHidden smHidden md={1}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey={1} href="#">
                <Glyphicon glyph="plus" />
              </NavItem>
              <NavItem eventKey={2} title="Item">
                <Glyphicon glyph="th" />
              </NavItem>
              <NavItem eventKey={3}>
                <Glyphicon glyph="trash" />
              </NavItem>
              <NavItem eventKey={4}>
                <Glyphicon glyph="search" />
              </NavItem>
              <NavItem eventKey={5}>
                <Glyphicon glyph="filter" />
              </NavItem>
              <NavItem eventKey={6}>
                <Glyphicon glyph="fullscreen" />
              </NavItem>
              <NavItem eventKey={7}>
              <Glyphicon glyph="pencil" />
              </NavItem>
              <NavItem eventKey={8}>
              <Glyphicon glyph="step-backward" />
              </NavItem>
              <NavItem eventKey={9}>
              <Glyphicon glyph="step-forward" />
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
