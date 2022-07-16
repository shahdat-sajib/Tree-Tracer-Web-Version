import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomaPage from './Components/HomePage/HomePage';
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Homepage' element={<HomaPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
