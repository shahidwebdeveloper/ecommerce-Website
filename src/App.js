import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
 <BrowserRouter> 
 <Header/>
 <Routes>
  <Route path="/" exact={true} element={<Home/>} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
