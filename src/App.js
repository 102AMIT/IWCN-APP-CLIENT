import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position='top-right' />
        <Home />
      </div>
    </Router>
  );
}

export default App;
