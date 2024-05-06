import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Mapandfilter(props) {
    const [user, setUser] = useState([]);
    const [number, setNunber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    // fetch method
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((responce) => setUser(responce))
    })

    //   axios method
    // function add_Data(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>setUser(res.data))
    // }
    // useEffect(()=>{
    //     add_Data()
    // },[])
    useEffect(() => {
        number
    }, [])

    const mydata = () => {
     let numberlessthanfive=number.filter((no)=>{
        return no>=5
     }).map((filtered)=>{
        return filtered*filtered
     })
     setNunber(numberlessthanfive)
    }
    return (
        <>
            {/* <div className="container">
            {user.map((ele,id)=>{
                return(
                    <>
                    <ul>
                        <li>{ele.userId}</li>
                    </ul>
                    <ul>
                        <li>{ele.id}</li>
                    </ul>
                    <ul>
                        <li>{ele.title}</li>
                    </ul>
                    <ul>
                        <li>{ele.body}</li>
                    </ul><br />
                    </>
                )
            })}
        </div>   */}
            <div className="container">
                {number.map((element) => (
                    <>
                        {/* <div className="container">
                    {number}
                </div> */}
                        <div class="card-body">
                            <ul>
                            <li>{number}</li>
                            </ul><br />
                        </div>
                    </>
                ))}
                <button className='btn btn-danger' onClick={mydata}>see more</button>
            </div>
        </>
    );
}

export default Mapandfilter;