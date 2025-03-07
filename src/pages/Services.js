import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Services() {
    const services = [
        { title: "Classic Haircut", price: "$25" },
        { title: "Beard Trim", price: "$15" },
        { title: "Hot Towel Shave", price: "$20" }
    ];

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <Row>
                {services.map((service, index) => (
                    <Col key={index} md={4} className="mb-3">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.price}</Card.Text>
                                <Button variant="success" href="https://calendly.com/backstreetbarbers" target="_blank" rel="noopener noreferrer">
                                    Book Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Services;
