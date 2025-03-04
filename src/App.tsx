import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
import Profile from './Profile/Profile.tsx'
import About from './About/About.tsx'
import Experiences from './Experiences/Experiences.tsx'
import Projects from './Projects/Projects.tsx'

function App() {

  return (
    <>
      <Header />
      <Profile />
      <div className="info">
        <About />
        <Experiences />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
