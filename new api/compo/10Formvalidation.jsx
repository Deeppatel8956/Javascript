import React, { useState } from 'react'

function Formvalidation() {
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastname]=useState("");
    const [pwd,setPwd]=useState("");
    const [email,setEmail]=useState("");

    const [firstnameer,setFirstNameer]=useState(false);
    const [lastnameer,setLastnameer]=useState(false);
    const[pwder,setPwder]=useState(false);
    const[emailer,setEmailer]=useState(false);

    function submit_Data(e) {
        if (firstname.length<8||lastname.length<8) {
            alert("at leaest write 7 character")
        }
        if (pwd.length<8||email.length<8) {
            alert("write correct detail")
        }else{
            alert("this is good")
        }
        e.preventDefault();
    }

    function Firstname(e) {
        let item=e.target.value;
        if (item<3) {
            setFirstNameer(true)
        } else {
            setFirstNameer(false)
        }
        setFirstName(item)
    }

    function Lastname(e) {
        let item=e.target.value;
        if (item<3) {
            setLastnameer(true)
        } else {
            setLastnameer(false)
        }
        setLastname(item)
    }

    function pwdes(e) {
        let item=e.target.value;
        if (item<8) {
            setPwder(true)
        } else {
            setPwder(false)
        }
        setPwd(item)
    }

    function emailes(e) {
        let item=e.target.value;
        if (item<8) {
            setEmailer(true)
        } else {
            setEmailer(false)
        }
        setEmail(item)
    }
  return (
    <>
    <div className="container">
        <form action="" onSubmit={submit_Data}>
            <label htmlFor="">firstname</label><br />
            <input type="text" name="" id="told"  onChange={Firstname} /><br />{firstnameer?<span>please enter the atleast 3</span>:""} <br />
            <label htmlFor="">lastname</label><br />
            <input type="text" name="" id="told"  onChange={Lastname} /><br />{lastnameer?<span>please enter the atleast 3</span>:""} <br />
            <label htmlFor="">Password</label><br />
            <input type="text" name="" id="told"  onChange={pwdes} /><br />{pwder?<span>please enter the atleast 8</span>:""} <br />
            <label htmlFor="">Email</label><br />
            <input type="text" name="" id="told"  onChange={emailes} /><br />{emailer?<span>please enter the atleast 8</span>:""} <br />
            <br />
            <button className='btn btn-success'>Submit</button>
        </form>
    </div>
    
    </>
  )
}

export default Formvalidation