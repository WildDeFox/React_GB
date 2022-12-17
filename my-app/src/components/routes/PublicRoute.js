import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PublicRoute = ({ component }) => {
  const { isAuth } = useSelector((store) => store.profile)

  if (!isAuth) {
    // return <Navigate to="/signin" />
  }

  return component ? component : <Outlet />
}