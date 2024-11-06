import './styles/App.css'
import Footer from './components/Footer'
import Institute from './Institute'
import Contact from './Contact'
import Library from './Library'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mission' element={<Home />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/events' element={<Home />} />
          <Route path='/library' element={<Home />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/team' element={<Home />} />
      </Routes>
      <div className="bg-black text-white selection:text-white selection:bg-gray-500">

        <div className="bg-white text-black selection:text-black selection:bg-gray-500 flex justify-center px-6 pt-10 pb-40">
          <div className="md:w-[729px]">
            <div className="md:flex flex-row mr-auto items-start">
              <Institute />
              <Contact />
            </div>
          </div>
        </div>

        <Library />

        <Footer />
      </div>
    </>
  )
}

export default App
