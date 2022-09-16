import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Wrapper,
  Title,
  NavLink,
  Footstyle,
} from "./Components/Styles/stylesheet";
import Home from "./Pages/IndexPage";
import About from "./Pages/OmMegPage";
import Contact from "./Pages/KontaktPage";
import Work from "./Pages/ArbeidPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <NavLink>
          <Link to='/'>Hjem</Link>
        </NavLink>
        <NavLink>
          <Link to='/about'>Om Meg</Link>
        </NavLink>
        <NavLink>
          <Link to='/contact'>Kontakt</Link>
        </NavLink>
        <NavLink>
          <Link to='/work'>Arbeid</Link>
        </NavLink>
      </nav>
      <Wrapper>
        <Title>Andreas Tak</Title>
      </Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <footer>
        <Footstyle>
          Made posible by Andreas Tak<a href='www.andreastak.no'>Home</a>{" "}
        </Footstyle>
      </footer>
    </Router>
  );
}

export default App;
