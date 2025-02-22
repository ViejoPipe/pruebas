// App.jsx
import './styles/App.css'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import BenCon from './components/BenCon'
import CommentSection from './components/CommentSection'
import TablePlans from './components/tablePlans'
import PlansSection from './components/PlansSection'
import TablePriceSection from './components/TablePriceSection'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <section id="home">
          <HeroSection/>
        </section>
        <section id="servicios">
          <Services/>
        </section>
        <section id="">
          <BenCon/>
        </section>
        <section id="planes">
          <PlansSection/>
        </section>
        
        <section id="beneficios">
          <TablePlans/>
        </section>

        <section id="precios">
          <TablePriceSection/>
        </section>
        
        <CommentSection/>
        <Footer/>
      </div>
      <WhatsAppButton />
    </>
  )
}

export default App