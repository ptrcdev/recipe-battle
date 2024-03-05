import React from 'react';
import './HomePage.css';

function HomePage({startGame, goHome}) {

    return (
        <div className='main'>
            <img src='https://clipart-library.com/images/6irobK5rT.png' alt="logo"></img>     
            <button className="start" onClick={startGame}>Start Picking</button>      
        </div>
    );

}

export default HomePage;