import { useEffect,useState } from 'react'
import'./App.css'


function App(){
  const [time,setTime]= useState(0);


  const handleKeyDown=(event)=>{
    if(event.key ==='Enter'){
      const inputTime = Math.floor(event.target.value);
      if(isNaN(inputTime)){
        setTime(0);
      }
      else{
        setTime(inputTime);
      }
    }
  }


  useEffect(()=>{
    let intervalId;
    if(time>0){
      intervalId=setInterval(()=>{
        setTime((prevTime)=> prevTime-1)
      },1000);
      
    }
    else{
      setTime(0);

    }
    return ()=> clearInterval(intervalId);
  },[time])

  return(
    <div>
      <>
      <h1>Timer</h1>
      <input id="count" onKeyDown={handleKeyDown}/>
      <div id="time">{time}</div>
      </>
    </div>
  )
}



export default App;