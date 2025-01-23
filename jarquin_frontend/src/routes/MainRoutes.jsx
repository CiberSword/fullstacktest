import {Route, Routes} from "react-router";
import {StartPage} from "../Views/StartPage/StartPage.jsx";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
    </Routes>
  )
}