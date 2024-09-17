import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Action"

const AddTask=()=>{
    const [title,setTitle] = useState('')
    const dispatch = useDispatch()


    const handleAdd=()=>{


        if(title ==''){
            alert('3amr')
        }else{
            dispatch(addTask(title))
            setTitle('')
        }

    }
    
    return(
        <div>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
            <button onClick={()=>handleAdd()}>Add</button>
        </div>
    )
}

export default AddTask