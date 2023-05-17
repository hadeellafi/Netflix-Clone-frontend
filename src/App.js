import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import FavList from './components/FavList';
function App() {
  return (
    <>
    <NavBar/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/FavList" element={<FavList/>}></Route>
</Routes>
    </>
  );
}

export default App;
