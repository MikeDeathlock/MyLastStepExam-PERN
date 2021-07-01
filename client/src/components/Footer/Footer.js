import React from 'react'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';




const Footer = () => {
    return (
    <footer>
        <Container>
            <Row className="basic-navbar-nav p-3">
                <Col>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto first-col">
                                <Nav.Link className="nav">Product</Nav.Link>
                                <Nav.Link className="nav">Benefits</Nav.Link>
                                <Nav.Link className="nav">Partners</Nav.Link>
                                <Nav.Link className="nav">Team</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto first-col">                        
                                <Nav.Link className="nav-lin">Documentation</Nav.Link>
                                <Nav.Link className="nav-lin">Support</Nav.Link>
                                <Nav.Link className="nav-lin">Legal Terms</Nav.Link>
                                <Nav.Link className="nav-lin">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>              
            </Row>            
            <Row>
                <Col>
                    <div className='bottom-block'>
                        <div className="rigts">All rigts reserved &copy; </div>
                    </div>
                </Col>
            </Row> 
        </Container>
    </footer>
    )
}

export default Footer
