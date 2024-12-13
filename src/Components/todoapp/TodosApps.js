import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import './todo.css';

function TodosApps() {

    const [todos, setTodos] = useState([]);
    const [newtodos, setNewtodos] = useState('');

    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');
    
    const [filter, setFilter] = useState('');


    //Date event to stamp the date on every todo task
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;

    

    const handleChange = (e) => {
        setNewtodos(e.target.value)
    }

    //this block of code is essential as it initializes various
    //components that will be used. such as the uuidv4, the checkbox, the new todo entry
    const handleClick = () => {
        if (newtodos.trim() === '') return;
        if(newtodos === Number()) return;
        setTodos([...todos, {id:uuidv4(), text:newtodos, checked: false}]);
        setNewtodos('');
    }
    
    //coding the checkbox into the app
    const handleCheck = (id) => {
        const updatedCheck = todos.map((todo) => {
            return todo.id === id ? {...todo, checked: !todo.checked} : todo;
        })
        setTodos(updatedCheck)
    }

    //Delete function
    const handleDelete = (id) => {
        const updatedDelete = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(updatedDelete)
    }

    //Editing mode contains the edit block, the save block and the cancel block of code
    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditedText(text);
    }

    //this block ensures that the updates are saved
    const handleSave = (id) => {
        const updatedtodos = todos.map((todo) => {
            return todo.id === id ? {...todo, text: editedText} : todo;
        })
        setTodos(updatedtodos);
        setEditingId(null);
        setEditedText("");
    }

    const handleCancel = () => {
        setEditingId(null);
        setEditedText("");
    }

    //Filter Section
    const handleSelect = (e) => {
        setFilter(e.target.value)
    }

    //handling the selection filter
    const selectmode = todos.filter((todo) => {
        if(filter === 'completed') return todo.checked;
        if(filter === 'all') return true;
        if(filter === 'select') return null;
        if(filter === 'uncompleted') return !todo.checked;
        return false;
    })

  return (
    <div className='maincontainer'>
        <p className='taskheading'>TASK MANAGEMENT APP</p>
        <p className='content'>
            <input
              type='text'
              value={newtodos}
              onChange={handleChange}
              placeholder=' Enter a new task'
            />
            <button onClick={handleClick}>Add New Task</button>
        </p>
        <div className='rendersection'>
            {todos.map((todo) => {
                return <div key={todo.id}>
                    
                    {/* checkbox code */}
                    
                    <input
                      type='checkbox'
                      value={todo.checked}
                      onChange={() => handleCheck(todo.id)}
                      
                    />

                    {/* coding the edit mode - the edit code wraps the todo.text render*/}
                    {editingId === todo.id ? (
                        
                        <span>
                        <input
                          type='text'
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                        />

                        <button onClick={() => handleSave(todo.id)}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                        </span>
                       
                          
                    ) : (
                        
                        <span style={{textDecoration: todo.checked ? 'line-through' : 'none',
                            backgroundColor: todo.checked ? 'lightgreen' : 'white',
                            margin: '7px'
                        }} className='modifier'> 

                        <span>{todo.text}</span>
                        <span style={{fontSize:'11px', color:'red'}}> - {currentDate}</span>
                        </span>
                    )}
                    {editingId !== todo.id && (
                        <button
                          onClick={() => handleEdit(todo.id, todo.text)}
                          style={{backgroundColor: todo.checked ? '#993300' : '#3399FF',
                                  color:'white', fontWeight:'600', border:'none', width:'50px',
                                  height:'25px', borderRadius:'7px', fontSize:'15px', margin: '6px',
                                  cursor:'pointer'
                          }}
                        >Edit</button>
                    )}
                    
                    {/* end of edit code */}

                    {/* Coding and styling the Delete button */}
                    <button 
                      onClick={() => handleDelete(todo.id)}
                      style={{backgroundColor: todo.checked ? '#3399FF' : '#FF0000',
                              color:'white', fontWeight:'600', border:'none', width:'90px',
                              height:'25px', borderRadius:'7px', fontSize:'15px', margin: '6px',
                              cursor:'pointer'
                      }}
                    >Delete</button>
                </div>
            })}
        </div>

        {/* the select render */}
        <select value={filter} onChange={handleSelect}>
            <option value='select'>Select</option>
            <option value='all'>All</option>
            <option value='completed' >Completed</option>
            <option value='uncompleted'>Uncompleted</option>
        </select>

        {selectmode.map((todo) => {
            return <div >
                {todo.text}
                </div>
        })}
        
        

      
    </div>
  )
}

export default TodosApps
