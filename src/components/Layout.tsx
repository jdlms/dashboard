import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import "../styles/Layout.css";

export function Layout() {
  return (
    <>
      <div className="nav-wrapper">{<Nav />}</div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
}
