import React from 'react';

function Footer() {
    const styles = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    };
    const styles2 = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    };
  return (
    <footer class="text-center text-white" style={styles}>
        <div class="container p-4 pb-0">
            <ul class="nav justify-content-center">
                <li class="nav-item"><div href="#" class="nav-link text-white px-2">React | Javascript</div></li>
            </ul>
        </div>
        <div class="text-center p-4 pl-0 text-secondary" style={styles2}>© 2020 Copyright</div>
    </footer>
  );
}

export default Footer;