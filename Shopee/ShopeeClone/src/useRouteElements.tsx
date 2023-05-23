import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import path from './constants/path'
import ProductDetail from './pages/ProductDetail'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='login' />
}
const RejectRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        },
        {
          path: path.productDetails,
          element: (
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
