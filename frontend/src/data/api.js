// let id = "51100054";
const urlapi = "https://data.economie.gouv.fr";
const apiResult =
  "/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=reims&rows=1000&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=services_service&facet=horaires_automate_24_24&refine.prix_maj=2022";

class Api {
  constructor(ville = "reims") {
    this.ville = ville;
    this.url = urlapi + apiResult;
    this.data = [];
    this.result().then(() => this.afficherData());
  }

  // execute la requette et ajoute le resultat a data
  async result() {
    const status = fetch(this.url).then((res) =>
      res
        .json()
        .then((data) => data.records)
        .then((data) => data.map((elt) => this.data.push({ ...elt })))
    );

    await status;
  }

  // affiche dans la console les objets
  afficherData() {
    this.data.map((elt) => {
      console.table(elt.fields);
      return true;
    });
  }

  // recupere list des id des station
}

// nouvelle instance de Api
const api = new Api();
// api.result().then(() => api.afficherData());
