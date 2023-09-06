import { NavLink, Outlet } from "react-router-dom";

import { getDogs } from "../data/data";

export default function Dogs() {
  const dogs = getDogs();

  const changeSelect = (e) => {
    /*  const unclickedDog = dogs.filter(
            (dog) => dog.name !== e.target.textContent
        ); */
      const img = document.getElementsByTagName("img");
    Array.from(img).map((dog) => {
      dog.style.opacity = "1";
      return dog.alt !== e.target.textContent && (dog.style.opacity = "0.3");
    });
  };

  return (
    <div>
      <nav className="dogsList">
        {dogs.map((dog) => {
          return (
            <div className="item" key={dog.name}>
              <img
                src={dog.image}
                alt={dog.name}
                style={{ opacity: "1" }}
                onClick={changeSelect}
              />

              <NavLink
                className="navlink"
                to={`/dogs/${dog.name}`}
                onClick={changeSelect}
              >
                {dog.name}
              </NavLink>
            </div>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
}
