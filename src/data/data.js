import Dogs from "../routes/Dogs.js"; 

import  whiskey  from "../images/whiskey.jpg";
import  hazel  from "../images/hazel.jpg";
import  tubby  from "../images/tubby.jpg";


const dogs = [
  {
    name: "Whiskey",
    image: whiskey,
    age: 4,
    info: [
      "Whiskey loves eating popcorns.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you.",
    ],
  },
  {
    name: "Hazel",
    image: hazel,
    age: 0,
    info: [
      "hazel has soooo much energy!",
      "hazel is highly intelligent.",
      "Hazel loves people more than dogs.",
    ],
  },
  {
    name: "Tubby",
    image: tubby,
    age: 4,
    info: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina hates Tubby.",
    ],
  },
];

const getDogs = () => dogs;
const getDog = function (name) {
  return dogs.find((dog) => dog.name === name);
};

export { getDogs, getDog };
