import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello there,</span>
                <span className="introText">My name is <span className="introName">Zhanadil Ismail</span> <br />Thats my demo web site!</span>
                <p className="introPara">In that web site you can see the skills and <br />some programs that i've made.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Not Working Button</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;