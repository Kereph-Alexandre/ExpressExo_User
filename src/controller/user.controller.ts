import UserService from "../service/user.service";
import { Request, Response } from "express";

export default class UserController {
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAll();
    res.send(data);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await this.service.getById(+id);
    res.send(data);
  };

  deleteById = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id;
    this.service
      .deleteById(+id)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => res.send("suppression impossible"));
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const newUser = req.body;
    const data = await this.service.create(newUser);
    res.send(data);
  };

  update = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const data = await this.service.updateUserInfo(body, +id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  };

  patch = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const body = req.body;
    try {
      const data = await this.service.patchUserInfo(+id, body);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  };
}
