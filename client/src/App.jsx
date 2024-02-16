
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;