import Header from "./header";
import Counter from "./UserComponent";
import Operation from "./ToDo";
import Akash from "./Akash";
import HideShow from "./HideShow";
import { Event } from "./Akash";
import { useState } from "react";

function App(){
  
    const [display,setDisplay]=useState(true)
    return(
    
      <>
        <HideShow/>
        <h1>Toggle in react!</h1>
        <button onClick={()=> setDisplay(!display)}>Toggle</button>

        {
          display? <Counter/>:null
        }
    </>
  )
}


export default App;


