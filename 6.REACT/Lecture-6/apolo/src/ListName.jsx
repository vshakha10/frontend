import React from 'react' 
 
const ListName = (props) => { 
 
    const {profile} = props; 
 
    //let name = details 
 
    //let name1 = value 
 
    console.log('profile object' , profile); 
    console.log('language value' , profile.language); 
     
     
  return ( 
    <div> 
      <h1>This is ListName Components{profile.language}</h1> 
    </div> 
  ) 
} 
 
export default ListName