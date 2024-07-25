import './App.css'
import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import OTPForm from "./components/OTPForm"
import CourseList from "./components/CourseList"
import Batches from "./components/Batches"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/otp-form" />
    },
    {
      path: "/otp-form",
      element: <OTPForm />
    },
    {
      path: "/course-list",
      element: <CourseList />
    },
    {
      path: "/batches",
      element: <Batches />
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App