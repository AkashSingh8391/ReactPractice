import Header from "./header";
import Login,{Profile,Setting,Button} from "./UserComponent"

function App(){
const name="Akash";

  return (
    <div>
      <Header/>
      
    <Profile/>
    <Setting/>

    <h1>Hello ! Gurjar {name} Singh Virana...</h1>
    <Login/>
    
    <Apple/>
    <Color/>
    </div>
  )
}


function Apple(){
  return (

<h2>New function add via component</h2>

  )
}

function Color(){
  return (
    <h2>color is red.</h2>
  )
}


export default App;
