import React, { useState } from 'react';
import Contextes from './07Contextes2';
import Conex from './08Conex';
import { UserData } from './09Gloabacontext';
function Context1(props) {
    const[name,setName]=useState("Nishant");
    return (
        <div>
            <UserData.Provider value={{name,setName}}>
            <Contextes />
            <Conex />
            </UserData.Provider>
        </div>
    );
}

export default Context1;