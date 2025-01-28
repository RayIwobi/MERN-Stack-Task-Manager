import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import moment from 'moment' //for date

import './todo.css'

function TaskManager() {

    const [todos, setTodos] = useState([])

    const [filter, setFilter] = useState("")

    
    useEffect(() => {
        axios.get('http://localhost:4000/read')
        .then((res) => {
            setTodos(res.data)})
        .then((res)=> console.log(res))
        .catch((err) => console.log(err))
    },[])

    const handleDelete = (delID) => {
        axios.delete(`http://localhost:4000/remove/${delID}`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log({err, message:'something went wrong'}))

        const newdel = todos.filter((tod) => {
            return tod._id !== delID
        })
        setTodos(newdel)
    }

    // const handleChange = (id) => {
    //     const updatedcheck = todos.map((tod) => {
    //         return tod._id === id ? {...tod, checked:!tod.checked}:tod
    //     })
    //     setTodos(updatedcheck)
    // }

    const handleChange = (id) => {
        const updatedTodos = todos.map((tod) => {
            if (tod._id === id) {
                const updatedTodo = { ...tod, checked: !tod.checked };

                // Persist the updated checked state to the backend
                axios
                    .put(`http://localhost:4000/update/${id}`, {checked: updatedTodo.checked})
                    .catch((err) => console.log({ err, message: 'Failed to update checkbox state' }));

                return updatedTodo;
            }
            return tod;
        });

        setTodos(updatedTodos);
    };

    const handleSelect = (e) =>{
        setFilter(e.target.value)
    }

    const filer = todos.filter((tod) => {
        if(filter === '')return null;
        if(filter === 'All')return true;
        if(filter === 'Completed')return tod.checked;
        if(filter === 'Uncompleted')return !tod.checked;
        return false;
    })

    const formatDate = (date) => {
        return moment(date).format('MMM, DD, YYYY [at] h:mm A')
    }


  return (
    <div className='maincontent'> 
    
        
    <div className='header'>Task Management App</div>
    <div>with Mern stack</div>
       <div className='uppersection'>
        <div className='content'>
            <Link to='/create'>
                <button id='posttask'>Create new task</button>
            </Link>
        </div>

      {todos.map((tod) => {
        return <div key={tod._id} className='todowrapper'>
             <div id='todoinner'>
                <input
                    type='checkbox'
                    checked={tod.checked}
                    onChange={()=>handleChange(tod._id)}
                    className='checkboxarea'
                />
                <div className='inner'>
                <span style={{textDecoration: tod.checked?'line-through':'none'}}>
                {tod.todos}
                </span>
                 <div className='datectrl'>{formatDate(tod.createdAt)}</div>     {/*{tod.createdAt} */}
                </div>
               <div className='buttoncotrl'>
            <Link to={`/update/${tod._id}`}>
                 <EditNoteIcon style={{color:'white'}}/>
            </Link>
            <DeleteIcon style={{color:'red'}} onClick={()=>handleDelete(tod._id)}/>
        </div>
        </div>
        </div>
      })}
    </div>
    <hr/>
    <div className='selectclas'>
        <select value={filter} onChange={handleSelect} className='selectitem'>
            <option value=''>Select</option>
            <option value='All'>All</option>
            <option value='Completed'>Completed</option>
            <option value='Uncompleted'>Uncompleted</option>
        </select>

        {filer.map((tod) => (
            <div key={tod._id} className='todoselect'>
                <div>{tod.todos}</div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default TaskManager
