import { Route, Routes } from "react-router"
import Menu from "./pages/Menu"
import'./styles/main.scss';
import Menu2 from "./pages/Menu2";

function App() {

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Menu />} 
      />
      <Route 
        path="/menu2" 
        element={<Menu2 />} 
      />
    </Routes>
  )
}

export default App
