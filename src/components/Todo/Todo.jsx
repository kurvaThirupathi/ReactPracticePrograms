import React,{useState} from "react"
import "./Todo.css";

const Todo = () =>{
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editId, setEditId] = useState(null);
    const addTodoList = () =>{
        if(todo.trim() === "") return; 
        if (editId !== null) {
      // 🔹 Update existing todo
      setTodoList((prev) =>
        prev.map((t) =>
          t.id === editId ? { ...t, text: todo } : t
        )
      );
      setEditId(null);
    }
        else{
        const items={
            id:todoList.length+1,
            text:todo.trim(),
            completed:false
        }
        setTodoList((prev)=>{
            return [...prev, items]
        })
        setTodo("")
    }

    }
    
    const toggleChange = (id) =>{
        //alert("hai");
        setTodoList(
            todoList.map((t)=>{
                if(t.id === id){
                    return {...t, completed:!t.completed}
                }
                else{
                    return t;
                }

            })
        )

    }
    const editTodo = (id) => {
    const selected = todoList.find((t) => t.id === id);
    setTodo(selected.text);
    setEditId(id);
    
  };
    const deleteTodo = (id) =>{
        setTodoList(
            todoList.filter((t)=>{
                     return t.id !== id
            })
        )

    }


    return (
       <>
       <div className="mt-3">
            <input className="border border-solid border-gray-600 rounded-lg mr-2 bg-transparent" type="text" id="num1" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="p-1 bg-blue-800 rounded-lg text-white text-sm font-medium cursor-pointer" onClick={()=>addTodoList()}>
                {editId !==null ?"Update":"Add"}</button>
            <ul>
                {
                   todoList.map((t)=>{
                    return <li key={t.id}>
                        <div className="flex gap-2 items-center">
                            <input type='checkbox' className="w-10 cursor-pointer" checked={t.completed} onChange={()=>toggleChange(t.id)}/>
                            <span className={`text-sm font-medium w-32 ${t.completed?'underline':''}`}>{t.text}</span>
                            <div>
                                <button className="rounded-lg bg-red-200 text-gray-800 hover:bg-red-800 hover:text-white p-2 font-normal text-xs" onClick={()=>editTodo(t.id)}>Edit</button>
                                <button className="rounded-lg bg-red-200 text-gray-800 hover:bg-red-800 hover:text-white p-2 font-normal text-xs" onClick={()=>deleteTodo(t.id)}>Delete</button>
                            </div>
                        </div>
                    </li>

                   }) 
                }
            </ul>
       </div>
       </>
    )
}
export default Todo