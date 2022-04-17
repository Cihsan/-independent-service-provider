import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header';
import About from './Pages/Unique/About';
import Blogs from './Pages/Unique/Blogs';
import Checkout from './Pages/Unique/Checkout';
import Home from './Pages/Unique/Home';
import Login from './Pages/Unique/Login';
import NotFound from './Pages/Unique/NotFound';
import SignUp from './Pages/Unique/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={

        <About></About>
        
        }></Route>

        <Route path='/blogs' element={

        <Blogs></Blogs>
        
        }></Route>
        <Route path='/checkout' element={
        
        <Checkout></Checkout>
        
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App; 
