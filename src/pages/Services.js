import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Services() {
    const services = [
        { title: "Bespoke haircut", price: "£20", link: "https://calendly.com/backstreetbarbers/bespoke-haircut"},
        { title: "Out of hours haircut", price: "£20", link: "https://calendly.com/backstreetbarbers/out-of-hours-haircut"},
        { title: "Beard only", price: "£20", link: "https://calendly.com/backstreetbarbers/beard-only"},
        { title: "Long hair with the beard", price: "£20", link: "https://calendly.com/backstreetbarbers/long-hair-with-beard"},
        { title: "Long hair", price: "£20", link: "https://calendly.com/backstreetbarbers/long-hair"},
        { title: "Skin fade with beard", price: "£20", link: "https://calendly.com/backstreetbarbers/skin-fade-with-beard"},
        { title: "Short Back and Sides with beard", price: "£20", link: "https://calendly.com/backstreetbarbers/short-back-and-sides-with-beard"},
        { title: "Skin fade", price: "£20", link: "https://calendly.com/backstreetbarbers/skin-fade"},
        { title: "Short Back and Sides", price: "£20", link: "https://calendly.com/backstreetbarbers/short-back-sides"},
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
                                <Button variant="success" href={service.link} target="_blank" rel="noopener noreferrer">
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
