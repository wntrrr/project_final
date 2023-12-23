import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const Works = () => {
    const redirectToPage = (pageURL) => {
        window.location.href = pageURL;
    };

    return (
        <section id='works'>
            <h2 className="worksTitle">Projects that I've made:</h2>
            <span className="worksDesc">The following images represent my project works that I've created during my time at this University.</span>
            <div className="worksImgs">
                <img
                    src={Portfolio1}
                    alt=""
                    className="worksImg"
                    onClick={() => redirectToPage('restoran/onas.html')}
                    style={{ cursor: 'pointer' }}
                />
                <img
                    src={Portfolio2}
                    alt=""
                    className="worksImg"
                    onClick={() => redirectToPage('page2.html')}
                    style={{ cursor: 'pointer' }}
                />
                <img
                    src={Portfolio3}
                    alt=""
                    className="worksImg"
                    onClick={() => redirectToPage('page3.html')}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </section>
    );
};

export default Works;
