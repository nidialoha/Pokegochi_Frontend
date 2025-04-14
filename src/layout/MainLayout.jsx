import { Outlet } from "react-router-dom";
import ButtonNav from "../components/ButtonNav";

function MainLayout() {
  return (
    <div>
      <ButtonNav />
      <Outlet />
    </div>
  );
}

export default MainLayout;
