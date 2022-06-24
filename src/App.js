import FormData from "./Components/FormData/FormData";
import NavBar from "./Components/NavBar/NavBar";
import AllPost from "./Components/Posts/AllPost/AllPost";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./Components/SinglePost/SinglePost";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path=":id" element={<SinglePost />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
