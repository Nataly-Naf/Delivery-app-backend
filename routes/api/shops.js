import express from "express";
import shopsController from "../../controllers/shops-controller.js";

const router = express.Router();

router.get("/", shopsController.getAllShops);

export default router;
