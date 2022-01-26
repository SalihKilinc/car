import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import about from "../../assets/img/about-us.jpg"
import signature from "../../assets/img/signature.png";

const About = () => {
    return(
    
        <Container>
            <Row>
                <Col lg={6}>
                    <Image src={about } className="img-fluid"/>

                </Col>

                <Col lg={6}>
<h2>What do we offer </h2>
<p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptatem neque officiis tempore 
    quisquam! Obcaecati in, possimus expedita minus numquam alias. 
    A sed corporis fugiat eos itaque nam consectetur voluptatum aliquid!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Veniam harum repellendus eos ratione exercitationem soluta repellat 
    optio illum itaque ab. 
</p>
<p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptatem neque officiis tempore 
    quisquam! Obcaecati in, possimus expedita minus numquam alias. 
    A sed corporis fugiat eos itaque nam consectetur voluptatum aliquid!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Veniam harum repellendus eos ratione exercitationem soluta repellat 
    optio illum itaque ab. 
</p>
<p align ="right">
    <Image src={signature}/>
</p>
                </Col>

            </Row>
        </Container>





    );
};
export default About;
