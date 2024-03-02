import Shop from "../models/shops.js";

const getAllShops = async (req, res) => {
  const result = await Shop.find({}, "-createdAt -updatedAt");
  res.json(result);
};

export default {
  getAllShops,
};
