import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Jokes from './Components/Jokes';


function App() {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setJokes(result.jokes);
        },
        (error) => {}
      )
  }, [])


    return (
      <div className='App'>
        <div className='App-header'>
          <ul>
            {jokes?.map(j => (<Jokes key={j.id} jokes={j} flags={j.flags}/>))}
          </ul>
        </div>
      </div>
    );
  }

export default App;