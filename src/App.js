import "./index.css";
import Nav from "./componenets/Nav";
import Footer from "./componenets/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./componenets/Books";
import { books } from './data';
import Booksinfo from "./pages/BooksInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/books" exact element={<Books books={books}/>}/>
          <Route path="/books/:id" exact element={<Booksinfo books={books}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  ); 
}

export default App;
