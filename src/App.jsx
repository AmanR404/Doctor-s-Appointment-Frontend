import './App.css'
import Header from './Components/Header'
import Appointment from './Pages/Create Appointment/Appointment'
import Login from './Pages/Login/Login'
import Myappointments from './Pages/My Appointments/Myappointments'
import Dashboard from './Pages/Patient Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './Pages/Services/Services'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<><Header/><Dashboard /><Footer/></>} />
          <Route path='/appointment' element={<><Header/><Appointment/><Footer/></>}/>
          <Route path='/myappointments' element={<><Header/><Myappointments/><Footer/></>}/>
          <Route path='/services' element={<><Header/><Services/><Footer/></>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App