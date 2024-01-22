/* eslint-disable react/prop-types */

import Navbar from "./navigation";
import Notes from "./components/index";
import New from "./components/create";
import Details from "./components/detail";
import About from "./components/about";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";



function App() {


  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route exact path="/" Component={Notes} />
          <Route path="/new" Component={New} />
          <Route path ="/detail/:id" Component={Details}/>
          <Route path="/about" Component={About} />
          <Route path="*" element={<Navigate to='/' />} />
          </Routes>
      </Router>
    </>
  );
}
export default App;
