import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import SignupForm from './components/signup';
import { NavBar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </>
  );
}

export default App;
