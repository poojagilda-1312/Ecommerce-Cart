import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import  Home from './components/Home';
import CartDetails from './components/CartDetails';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    
    <>
    <Header/>
    <Routes>
      <Route path ='/' element={<Home/>}></Route>
      <Route path ='/cart' element={<CartDetails/>}></Route>
    </Routes>
   

    </>
   
  );
}

export default App;
