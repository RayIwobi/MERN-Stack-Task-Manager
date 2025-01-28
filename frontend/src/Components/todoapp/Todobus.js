import React from 'react';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';


function Todobus() {

    const [todos, setTodos] = useState([]);
    const [newtodos, setNewtodos] = useState('');

    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const [filter, setFilter] = useState('')

    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today.getDate();
    const Currentdate = month + '/' + date + '/' + year

    const handleChange = (e) => {
        setNewtodos(e.target.value)
    }

    const handleClick = () => {
        if(newtodos.trim() === '') return;
        setTodos([...todos, {id:uuidv4(), text:newtodos, checked:false}])
        setNewtodos('')
    }

    const handleDelete = (id) => {
        const updatedDelete = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(updatedDelete)
    }

    //checkbox
    const handleCheckbox = (id) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === id ? {...todo, checked:!todo.checked} : todo;
        })
        setTodos(updatedTodos)
    }

    //editing mode
    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditedText(text);
    }

    const handleSave = (id) => {
        const newSave = todos.map((todo) => {
            return todo.id === id ? {...todo, text:editedText} : todo;
        })
        setTodos(newSave);
        setEditingId(null);
        setEditedText('');
    }

    const handleCancel = () => {
        setEditingId(null);
        setEditedText('');
    }

    const handleselect = (e) => {
        setFilter(e.target.value)
    }

    const newfilter = todos.filter((todo) => {
        if(filter === 'all') return true;
        if(filter === 'completed') return todo.checked;
        if (filter === 'uncompleted') return !todo.checked;
        return false;
    })
  return (
    <div>
        <p>
            <input
              type='text'
              value={newtodos}
              onChange={handleChange}
              placeholder='Enter a task'
            />

            <button onClick={handleClick}>Add New</button>
        </p>
        <div>
            {todos.map((todo) => {
                return <div key={todo.id}>

                        <input
                          type='checkbox'
                          checked={todo.checked}
                          onChange={()=>handleCheckbox(todo.id)}
                        />

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
                        ):(
                            <span style={{fontSize:'18px', textDecoration: todo.checked ? 'line-through' : 'none'}}>
                                {todo.text}
                                {Currentdate}
                            </span>
                        )}

                        {editingId !== todo.id ? (
                            <span>
                                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                                </span>
                        ):(
                            ''
                        )}

                       <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            })}
        </div>
      <select value={filter} onChange={handleselect}>
        <option value='select'>select</option>
        <option value='all'>all</option>
        <option value='completed'>completed</option>
        <option value='uncompleted'>uncompleted</option>
      </select>

      {newfilter.map((todo) => {
        return <div>{todo.text}</div>
      })}
    </div>
  )
}

export default Todobus
