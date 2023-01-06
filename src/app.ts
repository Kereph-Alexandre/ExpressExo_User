import express, { Router } from "express";
import router from "./router/user.router";
import "dotenv/config";

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use("/users", router);

app.listen(port, () => {
  console.log(`Serveur lancé, port ${port}`);
});
