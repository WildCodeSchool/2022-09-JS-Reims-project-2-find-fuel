import axios from "axios";

let data;
let dataSort;

function sortData() {
  dataSort = [];

  data.forEach((fuel) => {
    const index = dataSort.findIndex((elt) => elt.id === fuel.fields.id);

    if (index < 0) {
      dataSort.push({
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
      dataSort[index].carburants.push({
        carburant: fuel.fields.prix_nom,
        carburantId: fuel.fields.prix_id,
        prix: fuel.fields.prix_valeur,
        date: fuel.fields.prix_maj,
      });
    }
  });
  return dataSort;
}

function getGeom(city) {
  let ville = dataSort.find((elt) => (elt.ville = city));
  return ville.geom;
}

function getData(url, setData, city, setPointGeo) {
  axios.get(url).then((response) => {
    data = response.data.records;
    setData(sortData());
    setPointGeo(getGeom(city));
  });
}
export default getData;
