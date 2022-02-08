import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { FiPhoneCall, FiYoutube, FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import UserMenu from './UserMenu'


const TopBar = () => {


    return (
        <div className="topbar" >
            <Container>
                <Row>
                    <Col xs={7}>
                        <Col> <FiPhoneCall size={16} /> <span className="d-none d-md-inline"> 
                        CALL US  </span>  +1 234 55 88</Col>
                    </Col>
                    <Col xs={5}>
                        <ul>
                            <li className="d-none d-md-block"><FiYoutube /></li>

                            <li className="d-none d-md-block"><FiFacebook /></li>

                            <li className="d-none d-md-block"><FiTwitter /></li>

                            <li className="d-none d-md-block"><FiInstagram /></li>

                            <li>
                               <UserMenu/> 

                            </li>
                        </ul>
                    </Col>


                </Row>

            </Container>
        </div>
    )
}

export default TopBar







