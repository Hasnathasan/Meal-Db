import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Loader from './Components/Loader/Loader'

function App() {
  return (
    <div className="container mx-auto px-5 md:p-0">
      <Header></Header>
      <div>
        <Loader></Loader>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
