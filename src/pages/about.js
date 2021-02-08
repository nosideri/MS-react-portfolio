import React from 'react';

const About = () => (
    <section id="about-me" className="about">
        <h2 className="section-title">
            About Me
        </h2>
        <img src="/assets/images/me.png" alt="Madison" width="300px" height="330px" />
        <div className="about-wrapper">
            <p>
                My name is Madison Stollmeyer, I'm 21 years old, and I'm currently attending the 6 month UCLA Coding Bootcamp. Previously, I went to Paul Mitchell The School Portland and graduated in November of 2019. 
                I am a licensed hairstylist in Oregon and decided to pursue other (not in-person) interests during covid.
                I most prefer to do frontend coding, such as CSS, Semantic UI, and React.
            </p>
        </div>
    </section>
);

export default About;