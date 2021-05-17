// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

const App = () =>{
  return(
  <>
    <div>
      <h1>My Login Page</h1><br></br>
      <h1>UserName</h1><input type="text" placeholder="Enter UserName:"/>
      <h1>Password</h1> <input type="text" placeholder="Password:"/>
      <button>Submit</button>
    </div>
    </>
  );
}

export default App;
