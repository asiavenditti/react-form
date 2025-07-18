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


  return (
    <>

      <div className="container mt-2 p-4">

        <h1 className="mb-4 text-primary text-center">Articoli Tecnologici</h1>
        <ul className="list-group shadow-sm">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{task}</li>
            )
          })}

        </ul>
      </div>
    </>

  )


}

export default App
