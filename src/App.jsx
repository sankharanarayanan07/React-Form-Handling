import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Welcome from "./Welcome";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;