import Product from "../models/products.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(
      { shopId: req.body.shopId },
      "-createdAt -updatedAt"
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id,
      "-createdAt -updatedAt"
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
};

export default {
  getAllProducts,
  getProductById,
};
