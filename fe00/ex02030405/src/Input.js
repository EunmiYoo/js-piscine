import "./Input.css";
import {useRef,useState} from "react"
export default function ToDoInput ({onAdd}){
    const textRef = useRef()
    const [text, setText] = useState("");
    const changeInput = (e)=> {
        const {value} = e.target
        setText(value);
    }
    const onSubmit = (e) => {
        e.preventDefault()// 새로고침 방지 
        if(!text) return
        onAdd(text)
        setText("")
        textRef.current.focus();
    }
    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력해 주세요" type="text" value={text} onChange={changeInput} ref={textRef}/>
            <button>add</button>

        </form>
    )
}