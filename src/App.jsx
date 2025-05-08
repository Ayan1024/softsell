import Hero from "./components/Hero";
import Howitworks from './components/Howitworks';

import Whychooseus from './components/Whychooseus';
import Testimonials from "./components/Testimonials";
import Contactform from "./components/Contactform";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatwidget from "./components/Chatwidget";



function App() {
  return (
    <div className="font-sans">
 
      <Header />

      <Hero />

      <Howitworks />

      <Whychooseus />

      <Testimonials />

      <Contactform />

      <Chatwidget />

      <Footer />
    </div>
  );
}

export default App;
