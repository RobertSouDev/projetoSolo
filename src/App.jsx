import { BrowserRouter, Route, Routes } from "react-router-dom"
import Primeiro from "./Pages/Primeiro"
import Header from "./components/Header/Header";
import Segundo from "./Pages/Segundo";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Primeiro/>}/>
        <Route path="/segundo" element={<Segundo/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
