import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AddAlbum from "./components/AddAlbum"
import UpdateAlbum from './components/UpdateAlbum'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const jsonData = await response.json();
        setState(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
            {/* Render the Navbar component */}
            <Navbar />
            {/* Define the routes */}
            <Routes>
              {/* Route for the home page */}
              <Route path="/" element={<Home state={state} setState={setState} />} />
              {/* Route for the add product */}
              <Route path="/add-album" element={<AddAlbum state={state} setState={setState} />} />
              {/* Route for the update product */}
              <Route path="/update-album/:pos" element={<UpdateAlbum state={state} setState={setState} />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
