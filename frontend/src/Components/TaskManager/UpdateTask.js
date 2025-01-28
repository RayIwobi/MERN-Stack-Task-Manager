import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './todo.css'
import Backimg from './back.png'
import Updateimg from './update.png'

function UpdateTask() {
    const[todos, setTodos] = useState("")
    const{ _id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/look/${_id}`)
        .then((res)=>{
            setTodos(res.data.todos);
        })
        .catch((err)=>console.log(err))
    },[_id])

    const handleUpdate = () => {
        axios.put(`http://localhost:4000/update/${_id}/`, {todos})
        .then((response)=>console.log(response))
        .catch((error)=>console.log({error, message:'it didnt update'}))
        navigate('/')
    }

  return (
    <div className='maincontent'>
        <div className='posttext'>Update Task</div>
    <div >
        <form className='update-section'>
        <input
            type='text'
            name='todos'
            value={todos}
            onChange={(e)=>setTodos(e.target.value)}
            className='postarea'
        />
        
        
        <img src={Updateimg} alt='post' 
        onClick={handleUpdate}  className='postbutton'/>
        <Link to='/'>
            <img src={Backimg} alt='back' className='backbutton'/>
        </Link>
        </form>
    </div>
    </div>
  )
}

export default UpdateTask
