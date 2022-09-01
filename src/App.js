import './App.css';
import { AppBar, Button, Toolbar } from '@mui/material';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { AddColor } from './AddColor';

function App() {

  //Need to naigate to another Page
  const navigate=useNavigate();
  return (
    <div className="App">
       <AppBar>
        <Toolbar>
          <Button color='inherit'
          onClick={() => navigate('/Home')}
          >
            Home
          </Button>
          <Button color='inherit'
          onClick={() => navigate('/ColorGame')}>
            Color Game
          </Button>
        </Toolbar>
       </AppBar>
       {/* <nav>
        <ul>
          <li>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/Colorgame'>COlorgame</Link>
          </li>
        </ul>
       </nav> */}


      {/* By using Routes and route we give the path Link */}
   <div>
   <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/ColorGame' element={<AddColor/>}/>
    </Routes>

   </div>
    
    </div>
  );
}

export default App;
