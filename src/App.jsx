import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import "./App.css";
import { array } from "prop-types";
import Navbar from "./components/Navbar";

//paginas
import Home from "./pages/Home";
import SingleShow from "./pages/SingleShow";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [empty, setEmpty] = useState(true);
  let timeoutToken = 0;
  useEffect(() => {
    return () => clearTimeout(timeoutToken); // Limpiar el temporizador al desmontar el componente
  }, []);

  function searchShow(query) {
    let url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        const arrayResult = jsonData.map((element) => element.show);
        if (arrayResult.length != 0) {
          setResult(arrayResult);
        }
      });
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setInput(inputValue); // Actualizar el estado 'input' con el nuevo valor
    clearTimeout(timeoutToken);
    if (inputValue != "") {
      timeoutToken = setTimeout(() => {
        searchShow(inputValue);
      }, 1000);
    } // Llamar a la función searchShow con el nuevo valor
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/singleshow/:id" Component={SingleShow} />
      </Routes>
    </Router>
  );
}

export default App;
