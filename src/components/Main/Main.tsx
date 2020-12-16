import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Main.scss';
import genshin from './genshin_21_4K.jpg';

const Main: React.FC<any> = () => {
    let images = [];
    for (let i = 0; i < 5; i++) {
        images.push(<div><Col><img src={genshin} alt="" width='50px' height='40px' /></Col></div>)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <img className='upper-image' src={genshin} alt="" />
                    </Row>
                    <Row>
                        {images}

                    </Row>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                    <Row>
                        <h1 className="product-name">Name</h1>
                    </Row>
                    <Row>
                        <p className="text-muted lead">description</p>
                    </Row>
                    <Row>
                        <Col>
                            <div className="discount-price">
                                <span style={{ color: "rgb(0,0,0)", fontSize: "2rem", fontWeight: "bold", marginRight: "10px" }}>
                                    $90.00
                                </span>
                            </div>
                        </Col>
                        <Col>
                            <div className="original-price">
                                <span style={{ background: "rgb(191,191,191)", height: "2px", left: "0px", position: "absolute", top: "55%", width: "100%" }}></span>
                                    $100.00
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;