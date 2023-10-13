import Item from "./item";
export default function ItemList ({todos, onDel, onUpdate}){
    return (
        <ul>
            {todos.map(todos => 
                <Item todos={todos} key={todos.id} onDel={onDel} onUpdate={onUpdate}/>
            )}
        </ul>
    )

}