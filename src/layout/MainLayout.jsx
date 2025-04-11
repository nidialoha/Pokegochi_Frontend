import { Outlet } from "react-router-dom";
import ButtonNav from "../components/ButtonNav";

function MainLayout() {
  return (
    <div>
      <Outlet />
      <ButtonNav />
    </div>
  );
}

export default MainLayout;
