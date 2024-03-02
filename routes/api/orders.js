import express from "express";
import ordersController from "../../controllers/orders-controller.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
const router = express.Router();

router.post("/", isEmptyBody, ordersController.addOrder);
export default router;
