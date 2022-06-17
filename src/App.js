import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Login from './login/login';
import Signup from './signup/signup';
import AdminHome from './Admin/AdminHome/AdminHome';
import AddFlight from './Admin/AddFlight/AddFlight';
import Home from './home/home';
import View from './Admin/AdminView/view';
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/adminhome' element={<AdminHome />}/>
    <Route path='/addflight' element={<AddFlight />}/>
    <Route path='/view' element={<View />}/>


    </Routes>
    </BrowserRouter>
  )
}
 
export default App;




