import React from "react";
import { useState } from "react";
function Gaming(){
    let[red, setRed] = useState(0);
    let[green, setGreen] = useState(0);
    let[blue, setBlue] = useState(0);
    function changeColor(){
        // alert("This is change color Torch")
        setRed(Math.floor(Math.random()*255));
        setGreen(Math.floor(Math.random()*255));
        setBlue(Math.floor(Math.random()*255));
    }
    // setInterval(changeColor, 1000);
    function reset(){
        setRed(0);
        setGreen(0);
        setBlue(0);
    }
    return(
        <div className="Gaming">
            <div style={{border:"30px solid",
                        borderRadius:"50px",
                        height:"500px",
                        margin:"80px",
                        width:"80%",
                        backgroundColor:`rgb(${red},${green},${blue})`}}>
            </div>
            <button onClick={changeColor}>Changecolor</button>
            <button onMouseEnter={reset}>Reset</button>
        </div>
    )
}
export default Gaming;