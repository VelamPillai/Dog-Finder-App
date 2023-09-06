import { useParams } from "react-router-dom";

import { getDog } from "../data/data";

export default function Dog() {
  const { dogName } = useParams(); //return dog object with key :value pair
  const dog = getDog(dogName);

  return (
    <div>
      <h1>Name : {dog.name}</h1>
      <p>Age : {dog.age}</p>
      {dog.info.map((element, idx) => {
        return <p key={idx}>{element}</p>;
      })}
    </div>
  );
}
