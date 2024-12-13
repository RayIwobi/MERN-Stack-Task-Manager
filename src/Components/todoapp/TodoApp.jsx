import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './todo.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


function TodoApp() {

    const [todos, setTodos] = useState([
        {text: 'Get more snacks from the mall', id:'1'},
        {text: 'Go to the gym in the morning', id:'2'},
    ]);
    const [newtodos, setNewtodos] = useState('');

    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const [filter, setFilter] = useState('')

    //date event to stamp the date on every task
    const today = new Date();
    const month = today.getMonth() +1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + '/' + date + '/' + year

    const handleChange = (event) => {
        setNewtodos(event.target.value)
    }

    const handleclick = () => {
        if(newtodos.trim() === '') return;
        setTodos([...todos, {id: uuidv4(), text: newtodos, checked: false}])
        setNewtodos('')
    }

    const handleCheck = (id) => {
        const updatedcheck = todos.map((todo) => {
            return todo.id === id ? {...todo, checked: !todo.checked} : todo
        })
        setTodos(updatedcheck)
    }

    const handleDelete = (id) => {
        const updatedDelete = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(updatedDelete)
    }

    //handle edit mode
    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditedText(text)
    }

    const handleSave = (id) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === id ? {...todo, text:editedText} : todo
        })
        setTodos(updatedTodos)
        setEditingId(null)
        setEditedText('')
    }

    const handleCancel = () => {
        setEditingId(null)
        setEditedText('')
    }
    //end of edit mode

    const handleselect = (e) => {
        setFilter(e.target.value)
    }

    const changeselect = todos.filter((todo) => {
        if(filter === 'select')return '';
        if (filter === 'completed') return todo.checked;
        if(filter === 'uncompleted') return !todo.checked;
        if(filter === 'all') return true;
        return false;
    })


  return (
    <div className='maincontent'> 
        <div className='uppersection'>
        <div className='header'>Task Management App</div>
        <p className='content'>
            <input
               type='text'
               onChange={handleChange}
               value={newtodos}
               placeholder='Enter a task'
            />
            <button onClick={handleclick}>Add New</button>
        </p>
        </div>
        
        <div className='mainbody'>
            {todos.map((todo) => {
                return <div key={todo.id} className='rendersection'>
                    <div className='resultwrapper'>
                    <input
                      type='checkbox'
                      checked={todo.checked}
                      onChange={() => handleCheck(todo.id)}
                      className='checkbox'
                    />
                    
                    {editingId === todo.id ? (
                        <span className='editsection'>
                        <div>
                        <input
                          type='text'
                          value={editedText}
                          className='editmode'
                          onChange={(e) => setEditedText(e.target.value)}
                        />
                        </div>
                        <div className='savecancelicon'>
                        <SaveIcon onClick={() => handleSave(todo.id)}  className='saveicon'/>
                        <CancelIcon onClick={handleCancel}  className='cancelicon'/>
                        </div>
                        </span>
                        
                    ) : (
                        <div className='textoutput'>
                        <span style={{textDecoration: todo.checked ? 'line-through' : 'none',
                            color: todo.checked ? 'salmon' : 'white',
                            fontSize:'17px', fontWeight:'400'
                    }}>
                        {todo.text}
                        
                        </span>
                        <div className='datestamp'>{currentDate}</div>
                        </div>
                        
                    )}
                    <div className='editdelete'>
                    {editingId !== todo.id && (
                        <EditNoteIcon onClick={() => handleEdit(todo.id, todo.text)}  
                        className='editicon'
                        style={{width:'35px', height:'35px'}} />
                    )}
       
                    <DeleteIcon onClick={() => handleDelete(todo.id)} className='deleteicon'/>
                    </div>
                    </div>
                </div>
            })}
        </div>
        
    <hr className='horizontalrule'/>
    <div className='selectsec'>
      <select value={filter} onChange={handleselect}>
        <option value='select' selected>Select</option>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
      </select>
      </div>
      <div className='selectoutput'>
      {changeselect.map((todo) => {
        return <div className='selectsection'>
            {todo.text}
        </div>
      })}
    </div>
    
    </div>
  )
}

export default TodoApp
