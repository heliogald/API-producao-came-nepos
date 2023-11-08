import express from "express";
import cors from "cors";

import itemRoute from "./route/itens.js";
import clienteRoute from "./route/clientes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/", itemRoute);
app.use("/", clienteRoute);

app.listen(4000);
console.log("Servidor rodadado na porta 4000!");
