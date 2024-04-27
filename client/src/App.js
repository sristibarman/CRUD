import './App.css';
import Users from './components/getUsers/Users';
import Add from './components/addUsers/Add.js';
import Update from './components/updateUsers/Update';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/add" element={<Add/>} />
          <Route exact path="/update/:id"  element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
