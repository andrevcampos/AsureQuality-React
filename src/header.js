import React from 'react';

function Header() {
  return (

    <header>
        <nav class="p-3 container navbar navbar-light bg-light justify-content-between">

            <div class="text-center">
                <img src={process.env.PUBLIC_URL + '/asurequality-logo.png'} class="rounded img-fluid" alt="AsureQuality logo" style={{ width:'280px'}}/>
            </div>
            <div class="d-flex">
                <div href="#" class="btn btn-primary btn-sm mr-2 active" role="button" aria-pressed="true">React | Javascript</div>
            </div>
        </nav>

    </header>
  );
}

export default Header;
