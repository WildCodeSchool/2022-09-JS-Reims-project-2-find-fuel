import carburant1 from "../assets/carburant1.png";
import carburant2 from "../assets/carburant2.png";
import carburant3 from "../assets/carburant3.png";
import carburant4 from "../assets/carburant4.png";
import carburant5 from "../assets/carburant5.png";
import carburant6 from "../assets/carburant6.png";

function getLogo(id) {
  let img;

  switch (id) {
    case "1":
      img = carburant1;
      break;
    case "2":
      img = carburant2;
      break;
    case "3":
      img = carburant3;
      break;
    case "4":
      img = carburant4;
      break;
    case "5":
      img = carburant5;
      break;
    case "6":
      img = carburant6;
      break;
    default:
      img = "https://via.placeholder.com/150";
      break;
  }

  return img;
}

export default getLogo;
