import AppProvider from "./context/AppProvider"
import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Header"

function App() {

  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </AppProvider>
    </>
  )
}

export default App
