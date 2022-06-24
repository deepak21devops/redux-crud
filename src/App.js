import FormData from "./Components/FormData/FormData";
import NavBar from "./Components/NavBar/NavBar";
import AllPost from "./Components/Posts/AllPost/AllPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex flex-row justify-content-around mb-3">
        <FormData />
        <AllPost />
      </div>
    </div>
  );
}

export default App;
