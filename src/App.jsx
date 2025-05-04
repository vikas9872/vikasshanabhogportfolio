import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Education from './Education/Education.jsx'
import Projects from './Projects/Projects.jsx'
import Skills from './Skills/Skills.jsx'
function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Skills/>
      </div>
    </>
  )
}

export default App
