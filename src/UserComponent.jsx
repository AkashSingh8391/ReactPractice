function Login(){
    return (
        
        <div>
            <h1>Login</h1>
            <Button/>
        </div>
    )
}


export function Profile()
{
    return (
        <div>
            <h3>profile</h3>
        </div>
    )
}

export function Setting()
{
    return (
        <div>
            <h3>setting</h3>
        </div>
    )
}

function Button(){
    return(
        <button onClick={()=>alert("Hello")}>click me !</button>
    )
}


export default Login;