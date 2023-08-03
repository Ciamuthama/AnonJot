/* eslint-disable react/prop-types */

import Navbar from "./navigation";
import Notes from "./components/index";
import Details from "./components/detail";
import New from "./components/create";
import About from "./components/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Notes} />
          <Route path="/detail/:id" Component={Details} />
          <Route path="/new" Component={New} />
          <Route path="/about" Component={About} />
          {/* <Route path="*" >
            <Navigate to='/' />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}
export default App;
