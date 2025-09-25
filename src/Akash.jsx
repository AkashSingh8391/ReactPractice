import React from "react";

function Akash() {
  // 1. Normal function
  function sayHello() {
    alert("Hello from normal function!");
  }

  // 2. Arrow function
  const sayHi = () => {
    alert("Hi from arrow function!");
  };

  // 3. Function with parameter
  function greet(name) {
    alert("Welcome " + name);
  }

  return (
    <div>
      <h1>Function and Events Demo</h1>

      {/* Button calling normal function */}
      <button onClick={sayHello}>Call Normal Function</button>

      <br /><br />

      {/* Button calling arrow function */}
      <button onClick={sayHi}>Call Arrow Function</button>

      <br /><br />

      {/* Button calling function with parameter (need arrow wrapper) */}
      <button onClick={() => greet("Akash")}>Call Function with Param</button>
    </div>
  );
}

export default Akash;




export function Event(){

function callFun(){
  alert("function called!")
}

const fruit=(name)=>{
  alert(name)
}


return (
  <div>
   <h1>Event and function call</h1>
   <button onClick={()=>(fruit("apple"))}></button>
   <button onClick={()=>(fruit("banana"))}></button>
   </div>
)

}

