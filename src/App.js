import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
