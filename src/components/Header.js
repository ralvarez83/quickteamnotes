import React from "react";


const  Header = props => (
    <header className="top">
        <div className="menu">
            <h1>
                Catch 
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </div>
    </header>
);

export default Header;