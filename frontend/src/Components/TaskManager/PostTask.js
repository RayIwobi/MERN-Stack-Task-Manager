import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './todo.css'
import Postimg from './post.png'
import Backimg from './back.png'


function PostTask() {

    const [todos, setTodos] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(todos.trim() === ""){
            alert('input a task first before you post')
            return;
        }
        axios.post('http://localhost:4000/create/', {todos})
        .then((res) => console.log(res))
        .catch((err)=> console.log({err, message:'something went wrong'}))
        navigate('/')
    }

  return (
    <div className='maincontent'>
        <form >
        <div className='posttext'>Create a new Task</div>
            <div className='postsection'>
                
                <input 
                    type='text'
                    value={todos}
                    onChange={(e)=>setTodos(e.target.value)}
                    placeholder='Enter a new task'
                    className='postarea'
                />

                <img src={Postimg} alt='post' 
                onClick={handleSubmit}  className='postbutton'/>

                <Link to='/'>
                <img src={Backimg} alt='back' className='backbutton'/>
                </Link>
            </div>
        </form>
      
    </div>
  )
}

export default PostTask
