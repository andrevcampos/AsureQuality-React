import React from 'react';

function Hero() {
    const styles = {
        backgroundImage: 'url("/AQ-Story-v8.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px',
    };
    return (
    <div class="container">
        <div class="p-1 text-center bg-image" style={styles}></div>
    </div>
    );
}

export default Hero;