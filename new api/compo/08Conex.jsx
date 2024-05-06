import React from 'react';
import { useContext } from 'react';
import { UserData } from './09Gloabacontext';
function Conex() {
    let {setName}=useContext(UserData)
    return (
        <div>
            <button className='btn btn-warning' onClick={()=>setName("Uday")}>Change the name</button>
        </div>
    );
}

export default Conex;