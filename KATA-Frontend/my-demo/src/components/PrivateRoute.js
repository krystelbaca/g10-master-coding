import { Navigate } from 'react-router-dom'

import { useAuth } from '../helpers/auth'

export default function PrivateRoute({ children, redirectTo }) {
    let auth = useAuth();
    return auth.user ? children : <Navigate to={redirectTo}/>
  }