import express from "express";

import { getItens, addItens, updateItens, deleteItens } from "../controllers/item.js"; 

const router = express.Router();

router.get("/item", getItens);

router.post("/item", addItens);

router.put("/item:id", updateItens);

router.delete("/item:id", deleteItens);


export default router;
