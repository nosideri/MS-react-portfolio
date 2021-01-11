import React from 'react';

function Navbar() {
    return (
        <header>
            <h1>
                <a href="/"> Madison Stollmeyer </a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#my-work">My Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;