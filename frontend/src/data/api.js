import axios from "axios";

let data;
function trieData() {
  const dataTried = [];

  data.forEach((carburant) => {
    const index = dataTried.findIndex((elt) => elt.id === carburant.fields.id);

    if (index < 0) {
      dataTried.push({
        id: carburant.fields.id,
        adresse: carburant.fields.adresse,
        ville: carburant.fields.ville,
        geom: carburant.fields.geom,
        carburants: [
          {
            carburant: carburant.fields.prix_nom,
            carburantId: carburant.fields.prix_id,
            prix: carburant.fields.prix_valeur,
            date: carburant.fields.prix_maj,
          },
        ],
      });
    } else {
      dataTried[index].carburants.push({
        carburant: carburant.fields.prix_nom,
        carburantId: carburant.fields.prix_id,
        prix: carburant.fields.prix_valeur,
        date: carburant.fields.prix_maj,
      });
    }
  });
  return dataTried;
}
function getData(url, setData) {
  axios.get(url).then((response) => {
    data = response.data.records;
    console.log(data.length);
    setData(trieData());
  });
}
export default getData;
