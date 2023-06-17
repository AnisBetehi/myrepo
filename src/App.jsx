import { Route, Routes } from "react-router"
import Menu from "./pages/Menu"
import'./styles/main.scss';

function App() {

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Menu />} 
      />
    </Routes>
  )
}

export default App
