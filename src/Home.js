import React from "react";

const Home = (props) => {
    const {handleChange, inputValue} = props;

    return (
        <div>
        <label for="win">Win?</label>
            <input id="win" onChange={handleChange} value={inputValue} />
        </div>
    )
}

export default Home;