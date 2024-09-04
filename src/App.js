import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TopNavigation from './components/TopNavigation';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/topnavigation" element={<TopNavigation/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
