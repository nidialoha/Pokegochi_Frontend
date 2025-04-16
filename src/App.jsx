import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Battle from "./pages/Battle";
import Dashboard from "./pages/Dashboard";
import Center from "./pages/Center";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import Card from "./components/Card";
import HallOfFame from "./pages/HallOfFame";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginLayout from "./layout/LoginLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />

        
        <Route path="battle" element={<ProtectedRoute><Battle /></ProtectedRoute>} />
        <Route path="center" element={<ProtectedRoute><Center /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="loading" element={<Loading />} />
        <Route path="card" element={<ProtectedRoute><Card /></ProtectedRoute>} />
        <Route path="hall-of-fame" element={<ProtectedRoute><HallOfFame /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// export default App;

// function App() {
//   return (
//     <div>
//       <ButtonNav />
//     </div>
//   );
// }

export default App;
