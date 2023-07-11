import React from 'react';
import '../styles/Home.css';
import SlideIn from "../animations/SlideIn";

const Home = () => {



    return (
        <div>
            <div className="panel-landing">
                Home
            </div>
            <div className="panel">
                panel 1
            </div>
            <SlideIn direction="left">
                <div className="panel">
                    panel 2
                </div>
            </SlideIn>
            <SlideIn direction="right">
                <div className="panel">
                    panel 3
                </div>
            </SlideIn>
        </div>
    )
}

export default Home;