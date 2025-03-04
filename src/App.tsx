import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/MainPage/LandingPage'
import ActivitiesPage from './pages/MainPage/ActivitiesPage'
import DefaultLayout from './layouts/DefaultLayout'
import ProtectedRoute from '~/routes/ProtectedRoute'
import LoginPage from './pages/Guest/LoginPage'
import DashboardPage from './pages/User/DashboardPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='/activities' element={<ActivitiesPage></ActivitiesPage>}></Route>
            <Route path='/login' element={<LoginPage username={''} password={''}></LoginPage>}></Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
