import React,{useState} from 'react'
import Student from './Student'
export default function Home(){
  const [username,setUsername]=useState('');
const handleChange=(e)=>{
  setUsername(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault();
}


  return(
    <div>
      
      <form onChange ={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={handleChange}/>
        <input type="submit"/>
        </form>


        <table>
          <thead>
            <tr>
              <td>Name</td>
              </tr>
            </thead>
            <tbody>
           
             {
               Student.map((item)=>(
                <tr>
                     <td>{item.Name}</td>
                </tr>
               ))
             }
              
              </tbody>
          </table>
      </div>
  )
}