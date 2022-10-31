import axios from "axios";

let data;
function trieData() {
  const dataTried = [];

  data.forEach((fuel) => {
    const index = dataTried.findIndex((elt) => elt.id === fuel.fields.id);

    if (index < 0) {
      dataTried.push({
        id: fuel.fields.id,
        adresse: fuel.fields.adresse,
        ville: fuel.fields.ville,
        geom: fuel.fields.geom,
        carburants: [
          {
            carburant: fuel.fields.prix_nom,
            carburantId: fuel.fields.prix_id,
            prix: fuel.fields.prix_valeur,
            date: fuel.fields.prix_maj,
          },
        ],
      });
    } else {
      dataTried[index].carburants.push({
        carburant: fuel.fields.prix_nom,
        carburantId: fuel.fields.prix_id,
        prix: fuel.fields.prix_valeur,
        date: fuel.fields.prix_maj,
      });
    }
  });
  return dataTried;
}
function getData(url, setData) {
  axios.get(url).then((response) => {
    data = response.data.records;
    setData(trieData());
  });
}
export default getData;
