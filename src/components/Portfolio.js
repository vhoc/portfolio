import React, {useState} from "react";
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faAtlas } from '@fortawesome/free-solid-svg-icons'
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Github from "./portfolio-components/Github";
import Webfolio from "./portfolio-components/Webfolio";
import Contact from "./portfolio-components/Contact";

const Portfolio = () => {   

    return (

        <>
            <section className="py-3">
                <div className="container-fluid">
                    <div className="row my-3">

                        <div className="col-12">

                            <Tab.Container id="portfolio-menu" defaultActiveKey="first">

                                <Row>

                                    <Col xs={12}>

                                        <Nav className='flex-row justify-content-center'>

                                            <Nav.Item className='col-4 col-sm-4 col-md-4'>
                                                <Nav.Link eventKey='first' className='px-0'>
                                                <div className="card text-center h-100">
                                                    <div className="card-block p-2">
                                                    <h4 className="card-title">Github</h4>
                                                    <h2><FontAwesomeIcon icon={faGithub} size="sm-2x md-3x"/></h2>
                                                    <p>
                                                        Code repositories
                                                    </p>
                                                    </div>
                                                </div>
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item className='col-4 col-sm-4 col-md-4'>
                                                <Nav.Link eventKey='second' className='px-0'>
                                                <div className="card text-center h-100">
                                                    <div className="card-block p-2">
                                                    <h4 className="card-title">Webfolio</h4>
                                                    <h2><FontAwesomeIcon icon={faAtlas} size="sm-2x md-3x"/></h2>
                                                    <p>Websites I've made or contributed to</p>
                                                    </div>
                                                </div>
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item className='col-4 col-sm-4 col-md-4'>
                                                <Nav.Link eventKey='third' className='px-0'>
                                                <div className="card text-center h-100">
                                                    <div className="card-block p-2">
                                                    <h4 className="card-title">Contact</h4>
                                                    <h2><FontAwesomeIcon icon={faEnvelopeOpenText} size="sm-2x md-3x"/></h2>
                                                    <p>
                                                        Send me a message
                                                    </p>
                                                    </div>
                                                </div>
                                                </Nav.Link>
                                            </Nav.Item>

                                        </Nav>

                                    </Col>

                                </Row>

                                <Row>

                                    <Col xs={12} className='tab-content'>

                                        <Tab.Content>

                                            <Tab.Pane eventKey='first'>
                                                <Github/>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey='second'>
                                                <Webfolio/>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey='third'>
                                                <Contact/>
                                            </Tab.Pane>

                                        </Tab.Content>

                                    </Col>

                                </Row>

                            </Tab.Container>

                        </div>            

                    </div>
                </div>
            </section>
        </>

    );

}

export default Portfolio;