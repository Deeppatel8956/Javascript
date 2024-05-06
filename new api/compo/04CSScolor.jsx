import React, { useState } from 'react';

function CSScolor(props) {
    const [theme,setTheme]=useState(false);
    const toggletheme=()=>{
        setTheme(!theme)
    }
    return (
        <div>
            <div className="container" style={theme?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>
                <h1>Hello i am suprem hero</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, doloribus.</h2>
                <button className='btn btn-info' onClick={toggletheme}>Toggletheme</button>
            </div>
        </div>
    );
}

export default CSScolor;