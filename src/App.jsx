import Hero from "./components/Hero";
import Howitworks from './components/Howitworks';

import Whychooseus from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/Chatwidget";



function App() {
  return (
    <div className="font-sans">
 
      <Header />

      <Hero />

      <Howitworks />

      <Whychooseus />

      <Testimonials />

      <ContactForm />

      <ChatWidget />

      <Footer />
    </div>
  );
}

export default App;
