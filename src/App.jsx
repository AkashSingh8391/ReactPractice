import Header from "./header";
import Counter from "./UserComponent";
import Operation from "./ToDo";
import Akash from "./Akash";
import HideShow from "./HideShow";
import { Event } from "./Akash";
import { useState } from "react";
import PasswordInput from "./PasswordShow";
import { Example } from "./HideShow";

function App(){
  
    const [display,setDisplay]=useState(true)
    return(
    
      <>
        <HideShow/>
         <Example score={75} />
        
        <PasswordInput/>
        <h1>Toggle in react!</h1>
        <button onClick={()=> setDisplay(!display)}>Toggle</button>

        {
         
         display? <Counter/>:null
        
        
        }

    </>
  )
}


export default App;


