
import './index.css';
import Nav from './componenets/Nav';
import Landing from './componenets/Landing';
import Highlights from './componenets/Highlights';
import Featured from './componenets/Featured';
import Discounted from './componenets/Discounted';
import Explore from './componenets/Explore';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Highlights/>
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
