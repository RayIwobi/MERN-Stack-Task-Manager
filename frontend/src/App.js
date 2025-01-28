import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TaskManager from './Components/TaskManager/TaskManager'
import PostTask from './Components/TaskManager/PostTask'
import UpdateTask from './Components/TaskManager/UpdateTask'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<TaskManager />}/>
          <Route path='/create' element={<PostTask/>}/>
          <Route path='/update/:_id' element={<UpdateTask/>}/>
          {/* <Route path='/look/:_id' element={<UpdateTask/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
