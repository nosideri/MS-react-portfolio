import React from 'react';

function Navbar(props) {
    const tabs = ['Home', 'About Me', 'Portfolio', 'Contact Me', 'My Resume'];
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
        </header>
    )
}

export default Navbar;