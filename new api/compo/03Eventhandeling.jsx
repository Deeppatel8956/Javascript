import React, { useState } from 'react';

function Eventhandeling(props) {
    const [text,setText]=useState("");
    const Upearcase=()=>{
        let ntext=text.toUpperCase();
        setText(ntext)
    }
    return (
        <>
         <div className="container">
         <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="text" className="form-control" id="examp" placeholder="enter text" value={text} onChange={(e)=>setText(e.target.value)}/> <br />

</div>
<button className='btn btn-warning' onClick={Upearcase}>Upearcase</button>
        </div>   
        </>
    );
}

export default Eventhandeling;