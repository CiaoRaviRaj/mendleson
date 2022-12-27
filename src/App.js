import "./App.css";

import About from "./views/about/About";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import Hero from "./views/hero/Hero";
import LayeringImages from "./views/layeringImages/LayeringImages";
import OurClients from "./views/ourClients/OurClients";
import OurProjects from "./views/ourProjects/OurProjects";
import OurTeam from "./views/ourTeam/OurTeam";
import Service from "./views/service/Service";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <OurTeam />
      <OurProjects />
      <OurClients />
      <Footer />
      <LayeringImages />
    </div>
  );
}

export default App;
