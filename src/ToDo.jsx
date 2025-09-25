 function Operation(){
    let x=10;
    let y=20;

    function add(a,b){
        return a+b;
    }

    function multiply(a,b){
        return a*b;
    }

    function operation(a,b,op){
        if(op=="+"){
            return a+b;
        }
        else if(op=="-"){
            return a-b;
        }
        else{
            return a*b;
        }
    }
    return (
        <div>
            <h1>{operation(20,10,"+")}</h1>

        </div>
    )
}
export default Operation;