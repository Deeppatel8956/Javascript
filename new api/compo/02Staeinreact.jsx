import React, { useState } from 'react';

function Staeinreact(props) {
    const [no,setNo]=useState(0);
    const [name,setName]=useState("");
    const [isvisable,setIsvisable]=useState(false)
    const increment=()=>{
        setNo(no+1)
        setIsvisable(!isvisable)
    };
    const decrement=()=>{
        setNo(no-1)
    }
    const reset=()=>{
        setNo(0)
    }
    return (
        <div>
            {/* <div className="container">
                <h1>{no}</h1>
                <button className='btn btn-danger ' onClick={increment}>Increment</button>
                <button className='btn btn-dark mx-2' onClick={decrement}>Decrement</button>
                <button className='btn btn-info' onClick={reset}>Reset</button>
            </div> */}

            <div className="container">
                {isvisable?(
                    <h1>visable</h1>
                ):(<h1>
                    not visable
                </h1>)}
                <button className='btn-info' onClick={increment}>Incerment</button>
            </div>
        </div>
    );
}

export default Staeinreact;