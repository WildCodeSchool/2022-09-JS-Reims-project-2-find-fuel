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

function average() {
  const sum = (station) => {
    let somme = 0;
    const num = station.carburants.length;

    station.carburants.forEach((carburant) => {
      somme += carburant.prix;
    });

    return somme / num;
  };

  dataSort.forEach((station, index) => {
    const moyenne = sum(station);
    dataSort[index]["moyenne"] = moyenne;
  });
}

function sortAverage() {
  average();
  dataSort = dataSort.sort((a, b) => {
    return a.moyenne - b.moyenne;
  });
}

function getData(url, setData) {
  axios.get(url).then((response) => {
    data = response.data.records;
    setData(sortData());
    sortAverage();
  });
}
export default getData;
