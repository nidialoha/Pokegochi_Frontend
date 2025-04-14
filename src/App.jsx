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

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="battle" element={<Battle />} />
        <Route path="center" element={<Center />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="loading" element={<Loading />} />
        <Route path="card" element={<Card />} />

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
