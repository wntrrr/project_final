import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About me: </span>
            <span className="skillDesc">I am now at this moment of time a student of IITU, that located in Almaty, Kazakhstan. At the moment finishing the 3rd grade of University. </span>
            <span> ---------------- </span>
            <span className="skillDesc">Amount of skills that i have now: </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Designing</h2>
                        <p>At the University we did not study that specific course, but i can and did work with that type of tasks.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Also i can code front end of the web sites. You can check them out afterwords as well.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Development</h2>
                        <p>That is the course that i started this week. I am not advanced at it but i will be in the future.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;