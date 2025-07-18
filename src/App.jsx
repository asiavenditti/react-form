import { useState } from 'react'


function App() {

  const tec_items = [
    "Smartphone",
    "Laptop",
    "Cuffie Bluetooth",
    "Smartwatch",
    "Monitor",
    "Mouse",
    "Tablet",
    "Hard Disk",
    "Tastiera",
    "Webcam",
    "Speaker Bluetooth",
    "Router Wi-Fi",
    "Chiavetta USB",
    "Caricatore Wireless",
    "Power Bank",
    "Stampante",
    "Smart TV",
    "Drone",
    "Console di gioco",
    "Microfono"
  ];


  const [tasks, setTasks] = useState(tec_items)
  const [newTask, setNewTask] = useState('')



  function handleSubmit(e) {
    e.preventDefault()
    console.log(newTask);
    setTasks([newTask, ...tasks]);
  }


  function handleDelete(i) {
    const updateTasks = tasks.filter((task, index) => {
      return index !== i
    })
    setTasks(updateTasks)
    console.log(updateTasks);

  }


  return (
    <>
      <div className="container mt-2 p-4">

        <h1 className="mb-4 text-primary text-center">Articoli Tecnologici</h1>
        <ul className="list-group shadow-sm">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <i className='bi bi-trash' onClick={() => handleDelete(index)}></i>
              </li>
            )
          })}

        </ul>
        <form onSubmit={handleSubmit}>
          <div className='d-flex'>
            <input className='form-control mt-2' placeholder='Inserisci un nuovo articolo' type='text' value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button type='submit' className='btn'>
              <i className="bi bi-save fs-3"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  )


}

export default App