

import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import {FaRegTrashAlt } from "react-icons/fa"
import {useEffect} from 'react'
import "./Item.css"
export default function Item({todos, onDel, onUpdate}){
    const {id, text, checked} = todos
   
    useEffect(() => {
        let sections = document.querySelectorAll("li");
        sections.forEach((li) => {
        li.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "grey";
        })
       
        li.addEventListener("mouseout", function(e){
            e.target.style.backgroundColor= "white";
        })
    })
},[])
    return (
        <div className="list">
        <li className="item">
            <input type="checkbox" onClick={()=>onUpdate(id)} />
           
            <em className={`item-text ${checked ? "checked" : ""}`}>{text}</em>
            <button className='delbutton'onClick={()=>onDel(id)}><FaRegTrashAlt color='rgb(175,169,169)' size='15' /></button>
        </li>
        </div>
    )

}

