import { Home } from './components/Home'
import { Services } from './components/Services'
import { Slideshow } from './components/Slideshow'
import { About } from './components/About'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return(
    <div>
      <Home />
      <Services/>
      <Slideshow />
      <About/>
      <Footer/>
    </div>
  )
  
}

export default App
