export default class User {
  id!: number;
  nom: string;
  prenom: string;
  date_de_naissance?: string;
  date_inscription: string; //Date
  nationalite?: string;

  constructor(
    nom: string,
    prenom: string,
    nationalite: string = "",
    date_de_naissance: string = "",
    date_inscription?: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.date_de_naissance = date_de_naissance;
    this.nationalite = nationalite;

    if (!date_inscription) this.date_inscription = new Date().toLocaleString();
    else this.date_inscription = date_inscription;
  }

  //   getDate = () => {
  //     return this.date_inscription.toLocaleDateString();
  //   };
}
