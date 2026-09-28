import { useState } from 'react'
import './App.css'

function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [activeButton, setActiveButton] = useState('All')
  const buttonsList = ['All', 'Active', 'Done']

  const onTaskAdd = () => {
    if (taskText.trim() !== '') {
      setTasks((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: taskText.trim(),
          status: 'Active'
        }])
      setTaskText('')
    }
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const onFilterButtonsClick = (button) => {
    setActiveButton(button)
  }

  const onStatusChange = (id) => {
    setTasks(prev => prev.map(t => t.id === id ?
      { ...t, status: t.status === 'Done' ? 'Active' : 'Done' } : t
    ))
  }

  const filteredTasks = tasks.filter(task => {
    if (activeButton === 'All') return true
    return task.status === activeButton
  })
  return (
    <>
      <div className="ListHeader">
        <h3>To Do List</h3>
        <div className="day">Today</div>
        <div className='task-count'>
          {tasks.length > 0 ? `${tasks.length} tasks done` : 'No tasks yet'}
        </div>
        <div className='container'>
          <div className='task-input-container'>
            <input className="task-input"
              type="text"
              placeholder="What needs doing?"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="add-button" onClick={() => onTaskAdd()}>Add</button>
          </div>
          {tasks.length > 0 && <div className='action-buttons'>
            {buttonsList.map((button) => (
              <button
                key={button}
                className={activeButton === button ? "filter-button-active" : "filter-button"}
                onClick={() => onFilterButtonsClick(button)}
              >
                {button}
              </button>
            ))}
          </div>}

          <div className='task-list'>
            {filteredTasks.length ? filteredTasks.map((task) => (
              <div className='task-item' key={task.id}>
                <div>
                  <input type="checkbox" checked={task.status === 'Done'}
                    onChange={() => onStatusChange(task.id)}
                  />
                  <span style={{ textDecoration: task.status === 'Done' && 'line-through' }}>{task.text}</span>
                </div>
                <button className='delete-button'
                  onClick={() => deleteTask(task.id)}
                > Delete</button>
              </div>
            ))
              :
              <div className='no-tasks'>
                <div className="no-tasks-message">Start your List</div>
                <div className="no-tasks-subMessage">Add your first task above.</div>
              </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
