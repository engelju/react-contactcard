import React from "react"

const App = () => {
    const msg = "This is my message to you.";

    const divStyle = {
        color: 'blue'
    };

    const handleClick = () => {
        alert("you clicked again");
    }

    return (
        <div className="helloworld">
            <h1>Hello, World</h1>
            <h2>First React App</h2>
            <p style={divStyle}>Second React App</p>
            <p onClick={() => alert("you clicked...")}>{msg}</p>
            <p onClick={handleClick}>{msg}</p>
        </div>
    );
}

export default App