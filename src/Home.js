import React from "react";
import logo from "./logo.jpg";

const Home = () => {
    const characters = "Building students' futures, one concrete idea at a time".split('');

    return (
        <div className="home-container">         
            <div className="logo-container">
                <img src={logo} className="logo" alt="Logo" />
            </div>
            <div className="heading-container">
                <span className="catchphrase">
                    {characters.map((char, index) => (
                        <span
                            key={index}
                            style={{ animationDelay: `${index * 0.05}s` }} 
                        >
                            {char}
                        </span>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default Home;
