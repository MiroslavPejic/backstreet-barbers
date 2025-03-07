import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container className="text-center my-5">
            <h1>Welcome to Backstreet Barbers</h1>
            <p>Premium grooming with a touch of class.</p>
            <Button variant="primary" href="https://calendly.com/backstreetbarbers" target="_blank" rel="noopener noreferrer">
                Book an Appointment
            </Button>
        </Container>
    );
}

export default Home;
