function Button2() {
    
    const handleClick2 = (e) => e.target.textContent = "OUCH! 😢";

    //return(<button onClick={(e) => handleClick2(e)}>Click me 2😊</button>);
    return(<button onDoubleClick={(e) => handleClick2(e)}>Click me 2😊</button>);
}

export default Button2