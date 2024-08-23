import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import Navbar from './Components/NavRoute'
import Topbar from './Components/Topbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import OurServices from './Components/Services/OurServices';
import AllPageHeader from './Components/RepeatedComponent/AllPageHeader';
import Contact from './Components/Contact/Contact';
import MoveToTop from './MoveToTop';
import TeamPage from './Components/Team/TeamPage';

function App() {
  return (
    <>
      <Router>
        <MoveToTop />
        <Topbar />
        <Navbar />
        <AllPageHeader />
        < Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<OurServices />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/team' element={<TeamPage />}></Route>
        </ Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
