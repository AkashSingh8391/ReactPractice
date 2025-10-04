import Header from "./header";
import Counter from "./UserComponent";
import Operation from "./ToDo";
import Akash from "./Akash";
import HideShow from "./HideShow";
import { Event } from "./Akash";
import { useState } from "react";
import PasswordInput from "./PasswordShow";
import { Example } from "./HideShow";
import User from "./property";

function App(){
    let userName="Akash Singh";
    let age=23;
    let email="akash@gmail.com";


    
    return(
    
      <>
        <User name={userName} age={age} email={email}/>
        <h1>Props in react!!!</h1>
        <User name={"Akash Singh Gurjar"}/>

    </>
  )
}


export default App;


