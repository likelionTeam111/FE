import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function ProtectedRoute() {
  const { isLogin } = useAuthStore();
  return isLogin ? <Outlet /> : <Navigate to="/auth" replace />;
}
