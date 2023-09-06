import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>
        {"helloz. we have dogz. click on them for more info.".toUpperCase()}
      </h1>
      <Outlet />
    </div>
  );
}
