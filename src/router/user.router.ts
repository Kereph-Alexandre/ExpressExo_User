import UserController from "../controller/user.controller";
import UserRepository from "../repository/user.repository";
import UserService from "../service/user.service";

import express from "express";

const repo = new UserRepository();
const service = new UserService(repo);
const controller = new UserController(service);

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.patch("/:id", controller.patch);

export default router;
