import './App.css';
import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SubscribeCard } from './components/SubscribeCard';
import { Contact, Pricing, Services, Testimonial } from './features';

function App() {
  return (
    <div>
        <Header />
        <Services />
        <Pricing />
        <SubscribeCard />
        <Testimonial />
        <Clients />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
