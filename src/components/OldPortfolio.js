import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faAtlas } from '@fortawesome/free-solid-svg-icons'
import { Tabs } from "react-bootstrap";

const OldPortfolio = () => {

    return (

        <>
            <section className="py-3">
                <div className="container">
                    <div className="row my-3">
                        
                        <div className="col-md-4">
                        <div className="card text-center h-100">
                            <div className="card-block p-2">
                            <h4 className="card-title">Github</h4>
                            <h2><FontAwesomeIcon icon={faGithub} size="3x"/></h2>
                            <p>
                                Code repositories
                                <br/>
                                In the making!
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4">
                        <div className="card text-center h-100">
                            <div className="card-block p-2">
                            <h4 className="card-title">Webfolio</h4>
                            <h2><FontAwesomeIcon icon={faAtlas} size="3x"/></h2>
                            <p>Websites I've made or contributed to</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4">
                        <div className="card text-center h-100">
                            <div className="card-block p-2">
                            <h4 className="card-title">Contact</h4>
                            <h2><FontAwesomeIcon icon={faEnvelopeOpenText} size="3x"/></h2>
                            <p>
                                Send me a message
                                <br/>
                                Is there anything I can help with?
                            </p>
                            </div>
                        </div>
                        </div>            

                    </div>
                </div>
            </section>
        </>

    );

}

export default OldPortfolio;