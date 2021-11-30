import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services'
import Footer from './components/Footer'
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <ContactUs />
       
      </Container>
      <Footer />
    </>
  );
}
export default App;
