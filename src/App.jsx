import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OTPForm from "./components/OTPForm"
import CourseList from "./components/CourseList"
import Batches from "./components/Batches"

function App() {
  useEffect(() => {
    Navigate
  }, [])


  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/otp-form" />}
          />
          <Route
            exact
            path="otp-form"
            element={<OTPForm />}
          />
          <Route
            exact
            path="course-list"
            element={<CourseList />}
          />
          <Route
            exact
            path="batches"
            element={<Batches />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App