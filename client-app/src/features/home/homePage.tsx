import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>HomePage</h1>
            <h1>Go To <Link to={'/activities'}>Activities</Link></h1>
        </Container>
    )
}

export default HomePage;