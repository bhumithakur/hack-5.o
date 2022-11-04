import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";
function App() {
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
         
      </div>
    );
  }

// function App() {
//   return (
//     <EthProvider>
//       <div id="App" >
//         <div className="container">
//           <h1>welcome to blockchain!!</h1>
          
//         </div>
//       </div>
//     </EthProvider>
//   );
// }

export default App;
