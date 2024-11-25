import React from 'react';

const LandingPage = () => {
    return (
        <div className="container">
            <h1>Welcome to MyApp</h1>
            <p>This is a public landing page accessible to everyone.</p>
        </div>
    );
};

const styles = {
    container: { textAlign: 'center', marginTop: '5rem' }
};

export default LandingPage;
