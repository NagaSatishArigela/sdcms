import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  // Courses,
  Footer,
  Carousel,
  Services,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <Carousel/>
      <Services/>
      {/* <Courses /> */}
      <Teacher />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
