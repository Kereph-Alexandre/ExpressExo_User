import axios from "axios";
import "dotenv/config";
import User from "../model/user.model";

export default class UserRepository {
  #URL = process.env.JSONSERVER;

  getAll = async (): Promise<User[]> => {
    return axios.get(`${this.#URL}`).then((res) => res.data);
  };
  getById = async (id: number): Promise<User> => {
    return axios.get(`${this.#URL}/${id}`).then((res) => res.data);
  };

  delete = (id: number): Promise<any> => {
    return axios.delete(`${this.#URL}/${id}`);
  };

  create = async (newUser: User): Promise<User> => {
    return axios.post(`${this.#URL}`, newUser).then((res) => res.data);
  };

  update = async (id: number, newUserData: User): Promise<User> => {
    return axios.put(`${this.#URL}/${id}`, newUserData).then((res) => res.data);
  };

  patch = async (id: number, newUserData: User): Promise<User> => {
    return axios
      .patch(`${this.#URL}/${id}`, newUserData)
      .then((res) => res.data);
  };
}
