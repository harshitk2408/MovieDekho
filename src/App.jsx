import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
// import {Context} from './main.jsx';
import Header from './components/Header.jsx';
import {Theatres} from './pages/Theatres.jsx';
import {Movies} from './pages/Movies.jsx';
import Shows from './pages/Shows.jsx';
import TheatreShows from './pages/TheatreShows.jsx'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        < Route exact path="/" element={<Movies/>}/>
        < Route exact path="/theatres" element={<Theatres/>}/>
        < Route exact path="/shows" element={<Shows/>}/>
        < Route exact path="/theatreshows" element={<TheatreShows/>}/>
      </Routes>
    </Router>
  )
}

export default App
