import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'; // Assuming you'll add custom styles here for any customizations

import IMAGE1 from '../assets/barber_shop_main.jpg';

function Home() {
    return (
        <Container className="text-center my-5">
            <Row>
                <Col md={6}>
                    <img 
                        src={IMAGE1} // Replace with your image URL
                        alt="Barbershop"
                        className="img-fluid rounded mb-4"
                    />
                </Col>
                <Col md={6}>
                    <h1>Welcome to Backstreet Barbers</h1>
                    <p>Premium grooming with a touch of class.</p>
                    <Button variant="primary" href="https://calendly.com/backstreetbarbers" target="_blank" rel="noopener noreferrer">
                        Book an Appointment
                    </Button>
                </Col>
            </Row>

            <Row className="my-5">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Expert Haircuts</Card.Title>
                            <Card.Text>
                                Get a fresh look with our professional haircuts tailored to your style.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Beard Grooming</Card.Title>
                            <Card.Text>
                                Keep your beard sharp and neat with our specialized beard grooming services.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Luxury Shaves</Card.Title>
                            <Card.Text>
                                Experience the ultimate relaxation with our luxury shave experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
