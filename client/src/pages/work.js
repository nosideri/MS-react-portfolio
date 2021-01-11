import React from 'react';

const Work = () => (
    <section id="my-work" className="work">
        <div className="flex-row">
            <h2 className="section-title">
                Work
        </h2>
        </div>

        <div className="work-grid-container">
            <a className="work-grid-1" href="https://nosideri.github.io/run-buddy/">
                <div>
                    Run-Buddy <br />
                        HTML/CSS
                    </div>
            </a>

            <a className="work-grid-2" href="https://nosideri.github.io/find-the-vibe/">
                <div>
                    Find The Vibe <br />
                        HTML/CSS/Foundation/JS
                    </div>
            </a>

            <a className="work-grid-3" href="https://fitness-pal-jhacms.herokuapp.com/">
                <div>
                    Fitness Pal <br />
                        HTML/CSS/Bootstrap
                    </div>
            </a>

            <a className="work-grid-4" href="#">
                <div>
                    Placeholder Title
                    </div>
            </a>

            <a className="work-grid-5" href="#">
                <div>
                    Placeholder Title
                    </div>
            </a>
        </div>

    </section>

)


export default Work;