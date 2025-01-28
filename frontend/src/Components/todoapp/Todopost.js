import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Todopost() {

    const [todos, setTodos] = useState("")
    //const navigate = useNavigate()

    const handlePost = () => {
        axios.post('http://localhost:4000/create/', {todos})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        //navigate('/')
    }
  return (
    <div className='uppersection'>
      <input
       type='text'
       value={todos}
       onChange={(e)=>setTodos(e.target.value)}
    />

    <button onClick={handlePost}>Post</button>
    <Link to='/'>
        <button>Back</button>
    </Link>
    
    </div>
  )
}

export default Todopost
