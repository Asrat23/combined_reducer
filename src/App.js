
import { useDispatch, useSelector } from 'react-redux';
import { firstname,lastname,gender,age,profesion } from './store/action';
import './App.css';
import { useState } from 'react';

function App() {
  const Fname=useSelector(state=>state.FIRSTNAME)
  const Lname=useSelector(state=>state.LASTNAME)
  const AGe=useSelector(state=>state.AGE)
  const GEnder=useSelector(state=>state.GENDER)
  const PRofesion=useSelector(state=>state.PROFESION)

  const dispatch = useDispatch()

  const [fname,setfirstname] = useState()
  const [lname,setlastname] = useState()
  const [Age,setage] = useState()
  const [Gender,setgender] = useState()
  const [Profesion,setprofesion] = useState()

  return (
    <div className="App"><div className='container'>
        <h1>combineReducers practice</h1>
        <div className='input-button'>First name: 
      <input placeholder='Enter your First Name' value={fname} onChange={(e)=>setfirstname(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(firstname(fname))}>dispatch</button><br/><br/>
       Last name:
        <input placeholder='Enter your Last Name' value={lname} onChange={(e)=>setlastname(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(lastname(lname))}>dispatch</button><br/><br/>
        Age:
        <input placeholder='Enter your Age' value={Age} onChange={(e)=>setage(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(age(Age))}>dispatch</button><br/><br/>
        Gender
        <input placeholder='Gender' value={Gender}  onChange={(e)=>setgender(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(gender(Gender))}>dispatch</button><br/><br/>
        Profesion:
        <input placeholder='Enter your profesion' value={Profesion} onChange={(e)=>setprofesion(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(profesion(Profesion))}>dispatch</button><br/>
        </div>
      
      <div ><h1>First Name :{Fname}</h1>
      <h1>Last Name :{Lname}</h1>
      <h1 >Age :{AGe}</h1>
      <h1 >Gender :{GEnder}</h1>
      <h1>Profession :{PRofesion}</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
