import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Destinations from '../src/components/Destinations';
import Search from '../src/components/Search';
import Select from '../src/components/Select';
import SelectCard from '../src/components/SelectCard';
import Carousel from '../src/components/Carousel';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Destinations />
       <Search />
       <Select />
       <Carousel />
       <Footer />
       
    </div>
  );
}

export default App;
