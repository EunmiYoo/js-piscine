import {useState} from 'react'
export default function InputBox(){
    const [value, setValue] = useState("");
    const onChange = (e) =>{
        console.log(value);
        setValue(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        if(value==="") return;
        console.log(value);
        setValue("");
    }


    return (
        <form>
            <input value={value} onChange={onChange}></input>
            <button onClick={onClick}>+</button>
            
        </form>
    )


}