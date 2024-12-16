import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h5 className="card-header">Learn Web development </h5>
        <div className="card-body">
          <ul id="button-box">
            <li><a href="#" className="btn btn-primary">HTML</a></li>
            <li><a href="#" className="btn btn-primary">CSS</a></li>
            <li><a href="#" className="btn btn-primary">JavaScript</a></li>
            <li><a href="#" className="btn btn-primary">Node.js</a></li>
            <li><a href="#" className="btn btn-primary">Express</a></li>
            <li><a href="#" className="btn btn-primary">ReactJS</a></li>
          </ul>
          <div id='description'>
            <h5 className="card-title">NameText</h5>
            <p className="card-text">descriptionText</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App



{/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}