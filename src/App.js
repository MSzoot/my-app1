import './App.css';
import {User} from './User.js' ;



function App() {
  const users = [
  { name: "Marcin", age : 32 },
  { name: "Edd", age :20},
  { name: "Jesse", age :69},
  ]
  return (
    <div className='App'> 
    {users.map((user) =>{
      return <User name={user.name} age={user.age}/>
    })}
 </div>
  );
}




export default App;




































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
