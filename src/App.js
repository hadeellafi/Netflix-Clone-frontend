import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import FavList from './components/FavList';
import Reviews from './components/Reviews';
function App() {
  return (
    <>
    <NavBar/>
{/* <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/FavList" element={<FavList/>}></Route>
</Routes> */}
<Reviews location_id={1234}/>
    </>
  );
}

export default App;
