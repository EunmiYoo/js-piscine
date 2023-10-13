import {useState} from 'react' 

export default function InputBox(){
    const [num, setNum] = useState("");
    const increase = (e) => {
        e.preventDefault();
        if(num==="") return;
        setNum((current)=>(current + 1));
    }
    const decrease = (e) => {
        e.preventDefault();
        if(num==="") return; 
        setNum((current)=>(current - 1));
       // console.log(num);
    }
    const onChange = (e) =>{
        const value = Number(e.target.value);
        if(isNaN(value)) return;
        setNum(value);
        console.log(value);
    }

   


    return (
        <form>
            <input onChange={onChange}></input>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <div>Count: {num}</div>
            
        </form>
    )


}