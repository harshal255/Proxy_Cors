import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes').then((res) => {
      setJokes(res.data)
    }).catch((err) => {
      console.log(err);
    })
  })

  return (
    <div>
      <h1>Jokes List</h1>
      <div>
        {
          jokes.map((ele) => {
            return (
              <div key={ele.id}>
                <h3>{ele.joke}</h3>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
