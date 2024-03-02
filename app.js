import express from "express";
import cors from "cors";
import logger from "morgan";
import shopsRouter from "./routes/api/shops.js";
import productsRouter from "./routes/api/products.js";
import ordersRouter from "./routes/api/orders.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
