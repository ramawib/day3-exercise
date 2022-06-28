import React from "react";

const ContentText = () =>{
    return(
        <>
        <h1>Subscribe</h1>
          <h2>Sign up with your email address to receive new updates.</h2>
        </>
    )
}

const ContentForm = () =>{
    return(
        <>
        <form action="#" className="App-form">
              <input placeholder='First Name' type="text" />
              <input placeholder='Last Name' type="text" />
              <input placeholder='Email' type="text" />
            </form>
            <button type='submit' className='App-cta'>Subscribe</button>
        </>
    )
}

export {ContentText, ContentForm};