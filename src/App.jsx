import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div class="card">
        <h5 class="card-header">Learn Web development </h5>
        <div class="card-body">
          <div id="button-box">
            <a href="#" class="btn btn-primary">HTML</a>
            <a href="#" class="btn btn-primary">CSS</a>
            <a href="#" class="btn btn-primary">JavaScript</a>
            <a href="#" class="btn btn-primary">Node.js</a>
            <a href="#" class="btn btn-primary">Express</a>
            <a href="#" class="btn btn-primary">ReactJS</a>
          </div>
          <div id='description'>
            <h5 class="card-title">NameText</h5>
            <p class="card-text">descriptionText</p>
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