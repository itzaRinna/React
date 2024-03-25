
function Button(){

    //const handleClick = () => console.log("OUCH!");

    //let count = 0;
    /*const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you click me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me !`);
        }
    }*/
    
    const handleClick = (e) => e.target.textContent = "OUCH!";

    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    return(
        
        <>
            {/*<button onClick={() => handleClick2("Bro")}>Click me</button>*/}
            {/*<button onClick={(e) => handleClick(e)}>Click me</button>*/}
            <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
        </>
    );
}

export default Button