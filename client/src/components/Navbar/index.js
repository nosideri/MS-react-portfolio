import React from 'react';

function Navbar(props) {
    const tabs = ['Home', 'About Me', 'My Work', 'Contact Me', 'My Resume'];
    return (
        <header>
            <h1>
                <a href="/"> Madison Stollmeyer </a>
            </h1>
            <ul className="nav nav-tabs">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
            {/* <nav>
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
                    <li>
                        <a href="https://docs.google.com/document/d/1x9kHHU-E6o3lWQ88JvzeBg8CwWyWEUEk0kBjsj9g57o/edit?usp=sharing">My Resume</a>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Navbar;