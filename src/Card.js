import React, { useState } from 'react';
import data from './data';
import logo from './logo.jpg';

const Card = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const indexOne = currentIndex % data.length;
    const indexTwo = (currentIndex + 1) % data.length;
    const indexThree = (currentIndex - 1 + data.length) % data.length;

    const personOne = data[indexOne];
    const personTwo = data[indexTwo];
    const personThree = data[indexThree];

    return (
        <>
            <div className="arrow-left" onClick={handleLeft}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="card1">
                <img className = "pfp" src={personOne.url} alt={personOne.name} />
                {/* <img className = "pfp" src={logo} /> */}
                <p className="execName">{personOne.name}</p>
                <p className="execPosition">{personOne.position}</p>
            </div>

            <div className="card2">
                <img className = "pfpSmall" src={personTwo.url} alt={personTwo.name} /> 
                <p className="execNameSmall">{personTwo.name}</p>
                <p className="execPositionSmall">{personTwo.position}</p>
            </div>

            <div className="card3">
                <img className = "pfpSmall" src={personThree.url} alt={personThree.name} />
                <p className="execNameSmall">{personThree.name}</p>
                <p className="execPositionSmall">{personThree.position}</p>
            </div>

            <div className="arrow-right" onClick={handleRight}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default Card;
