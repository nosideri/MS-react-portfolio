import React from 'react';

const Portfolio = () => (
    <section id="my-work" className="work">
        {/* <div className="card">
            <img src="../images/fitness-pal.png" alt="Fitness Pal preview" style=""></img>
            <div className="container">
                <h4><b>Fitness Pal</b></h4>
                <p>HTML/CSS/Bootstrap</p>
            </div>
        </div>

        <div className="card">
            <img src="../images/FINDTHEVIBE.png" alt="Find The Vibe preview" style=""></img>
            <div className="container">
                <h4><b>Find The Vibe</b></h4>
                <p>HTML/CSS/Foundation/Javascript</p>
            </div>
        </div>

        <div className="card">
            <img src="../images/KETOGETHER.png" alt="KETOgether preview" style=""></img>
            <div className="container">
                <h4><b>KETOgether</b></h4>
                <p>CSS/React/Semantic UI</p>
            </div>
        </div> */}

        <div className="flex-row">
            <h2 className="section-title">
                My Portfolio
        </h2>
        </div>

        <div className="work-grid-container">
            <a className="work-grid-1" href="https://ketogether.herokuapp.com/">
                <div>
                    KETOgether <br />
                    CSS/React/Semantic UI
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
                    
                </div>
            </a>

            <a className="work-grid-5" href="#">
                <div>

                </div>
            </a>
        </div>

    </section>

)


export default Portfolio;