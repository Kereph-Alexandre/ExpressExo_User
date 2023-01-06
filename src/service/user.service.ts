import User from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  getAll = async (): Promise<User[]> => {
    const data = await this.repository.getAll().catch((err) => {
      throw "erreur service getAll";
    });

    // if (typeof data != "string") {
    //   data.forEach((user) => {
    //     user.date_inscription = user.date_inscription.toLocaleString();
    //   });
    // }

    console.log(data);
    return data;
  };

  getById = async (id: number): Promise<any> => {
    return this.repository.getById(id).catch((err) => "erreur service getById");
  };

  deleteById = async (id: number): Promise<any> => {
    return this.repository.delete(id);
  };

  create = (userObject: User): Promise<User> => {
    const newUser = new User(
      userObject.nom,
      userObject.prenom,
      userObject.nationalite,
      userObject.date_de_naissance
    );
    return this.repository.create(newUser);
  };

  updateUserInfo = async (userInfo: User, id: number): Promise<User> => {
    if (userInfo.id != id) throw "objet corrompu";

    const newUser = new User(
      userInfo.nom,
      userInfo.prenom,
      userInfo.nationalite,
      userInfo.date_de_naissance,
      userInfo.date_inscription
    );

    const check = await this.getById(id);
    console.log(check);
    if (typeof check == "string") {
      return this.create(newUser);
    }
    return this.repository.update(id, newUser).catch((err) => err);
  };

  patchUserInfo = async (id: number, userData: User) => {
    if (userData.id != id) throw "objet corrompu";

    return this.repository
      .patch(id, userData)
      .catch((err) => "erreur lors de la mise a jour");
  };
}
