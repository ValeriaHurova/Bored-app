import { useEffect, useState } from 'react';
import './App.css';



function App() {
  
  const[advice, setAdvice] = useState("");
  const[show, setShow]= useState(false)

  useEffect( () => {getAdvice()}, [] )


      const getAdvice = async () => {
      const response = await fetch (`https://bored.api.lewagon.com/api/activity/`)
      const data = await response.json();
      console.log(data.activity);
      setAdvice(data.activity);
    }
 
  return (
    <div>
      <div className='header'>
        <h1>No time to be bored!</h1>
        <h2>Do you feel bored? <br></br>Click the button and choose what to do today.</h2>
        
      </div>
      <div className='header'>
        <p>{show ? advice : advice.substring(0,0)}</p>
        <button  class="button" onClick = {() => setShow(getAdvice)}>Click Here</button>
      </div>
       {/* <div className='header'>
        <p>{advice}</p>
        <button onClick = {getAdvice}>Click Here</button>
      </div> */}
    </div>

  );
}

export default App;
