// import logo from './logo.svg';
import './App.scss';
import Mains from './components/Main';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

const App:React.FC<any>=()=>{
  return(
    // <Mains name={"W"} name2={"Z"}/> 
    <Mains/>
  )
}

export default App;
