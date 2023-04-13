import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import "../styles/Layout.css";

export function Layout() {
  return (
    <>
      <div className="nav-wrapper">{<NavBar />}</div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
}
