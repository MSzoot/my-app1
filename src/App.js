import './App.css';
import {useState} from "react";



function App() {

  const[count,setCount] = useState(0)

  return (
  <div className='App'>
    <h2>Simple Counter App</h2>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count +1)}>Incrase</button>
    <button onClick={()=> setCount(count -1)}>Decrase</button>
    <button onClick={()=>setCount(0)}>Reset</button>
  </div>
)}




export default App;

































// import './App.css';
// import {User} from './User.js' ;
// import {Planets} from './User.js' ;
// import {useState} from "react";



// function App() {

//   const [changeColor,setChangeColor] = useState('black')

//   const toggleColor = () => {
//     setChangeColor(changeColor === 'black' ? "red" : "black")
//   }

//   return (
//   <div className='App'>
//     <button onClick={toggleColor}>Change color!</button>
//    <h1 style={{color: changeColor}}>Hi my name is Marcin!</h1>
//   </div>
// )}




// export default App;

























// import './App.css';
// import {User} from './User.js' ;
// import {Planets} from './User.js' ;
// import {useState} from "react";



// function App() {

// const [input,setInput] = useState('');

// const handleInputChange = (event) => {
//   setInput(event.target.value)
// }


//   return (
//   <div className='App'>
//   <input type='text' onChange={handleInputChange}/>
//   <br></br>
//   {input}
//   </div>
// )}




// export default App;























// import './App.css';
// import {User} from './User.js' ;
// import {Planets} from './User.js' ;
// import {useState} from "react";



// function App() {
//   const [age,setAge] = useState(31)
//   const incraseAge = () => {
//       setAge(age+1)
//   }
//   return <div className='App'>{age}<button onClick={incraseAge}>Incrase Age</button></div>
// }



// export default App;



































// import './App.css';
// import {User} from './User.js' ;
// import {Planets} from './User.js' ;



// function App() {


//   const users = [
//   { name: "Marcin", age : 32 },
//   { name: "Edd", age :20},
//   { name: "Jesse", age :69},
//   ]

//   const planets =[
//     { name: "Mars" , isGasPlanet : false},
//     { name: "Earth" , isGasPlanet : false},
//     { name: "Jupiter" , isGasPlanet : true},
//     { name: "Venus" , isGasPlanet : false},
//     { name: "Neptune" , isGasPlanet : true},
//     { name: "Uranus" , isGasPlanet : true},
//   ]



//   return (
//     <div className='App'>
//       <div>
//         {users.map((user) =>{
//         return <User name={user.name} age={user.age}/>
//         })}
//     </div>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <div>
//       {planets.map((planet)=> planet.isGasPlanet && <Planets name={planet.name}/>
    
//       )}
//     </div>
//  </div>

//   );
// }



// export default App;




































// function App() {
//   const age = 5;
//   const isGreeen = true;
//   return (
//  <div className="App">{age >=18 ? <h1>Old enough</h1> : <h1>Underage</h1>}
//   <h1 style={{color : isGreeen ? "green" : "black"}}>This has color</h1>
//   {isGreeen && <button>Have a button</button>}
//  </div>

//   )
// }

























// function App() {
//   return (
//     <div className="App company">
//     <Job salary={100000} position="WebDev" company="Google"/>
//     <Job salary={120000} position="Full-Stack-Dev" company="Amazon" />
//     <Job salary={90000} position="Junior-Dev" company="Startup" />
//     </div>
//   )}

  


// const Job = (props) => {
//   return (
//     <div>
//     <h1>{props.salary}</h1>
//     <h2>{props.position}</h2>
//     <h2>{props.company}</h2>
//     <br></br>
//     <br></br>
//     </div>
//   )
// }




// export default App;
