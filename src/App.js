import './App.css';

function App() {
  return (
    <div className="App">
    <Job salary={100000} position="WebDev" company="Google"/>
    <Job salary={120000} position="Full-Stack-Dev" company="Amazon" />
    <Job salary={90000} position="Junior-Dev" company="Startup" />
    </div>
  )}

  


const Job = (props) => {
  return (
    <div>
    <h1>{props.salary}</h1>
    <h2>{props.position}</h2>
    <h2>{props.company}</h2>
    <br></br>
    <br></br>
    </div>
  )
}




export default App;
