import React from "react";
import {ContentText, ContentForm } from "./ContentText";

const Content = () =>{
    return (
        <>
        <div className='App-text'>
          <ContentText/>
        </div>
        <div className='App-regist'>
            <ContentForm/>
        </div>
        </>
    )
}

export default Content;