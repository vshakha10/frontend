import ListName from './ListName' 
import './App.css' 
import React from 'react' 
 
function App() { 
  const profile = { 
    language: 'language1' 
  } 
 
  // let names = profile 
  // console.log('names' , names.type); 
   
 
  let details = ['language2'] 
 
  return ( 
    <> 
      <h1>This is App Components</h1> 
      <ListName profile={profile}/> 
    </> 
  ) 
} 
 
export default App