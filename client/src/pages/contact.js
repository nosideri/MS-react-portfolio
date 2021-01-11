import React from 'react';

function Contact(){
    return(
        <section id="contact-me" className="contact">
                <div className="flex-row">
                    <h2 className="section-title">
                        Contact Me
                </h2>
                </div>
                <div className="contact-info">
                    <div className="info">
                        805.234.3646
                </div>
                    <div className="info">
                        <a href="mailto:madi.stollmeyer@gmail.com">madi.stollmeyer@gmail.com</a>
                    </div>
                    <div className="info">
                        <a href="https://github.com/nosideri">GitHub</a>
                    </div>
                    <div className="info">
                        <a href="https://www.linkedin.com/in/madison-stollmeyer">LinkedIn</a>
                    </div>
                </div>
            </section>
    )
}

export default Contact;