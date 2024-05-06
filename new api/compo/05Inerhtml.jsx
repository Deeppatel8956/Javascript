import React from 'react';

function Inerhtml(props) {
    let data=`<p style="font-size:20px;color:red">hello</p>`
    return (
        <div>
            <div className="container">
                <h1 dangerouslySetInnerHTML={{__html:data}}></h1>
            </div>
        </div>
    );
}

export default Inerhtml;