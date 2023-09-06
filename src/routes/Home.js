import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>
        {"Dog Finder".toUpperCase()}
          </h1>
          <h2>Click on the Dog's Name to get more Information about the Dog</h2>
      <Outlet />
    </div>
  );
}
