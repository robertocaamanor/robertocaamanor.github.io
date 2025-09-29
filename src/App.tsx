import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CV from './components/CV'

// Componente para la página principal
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  )
}

export default App
