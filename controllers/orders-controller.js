import Order from "../models/orders.js";

const addOrder = async (req, res) => {
  try {
    const { clientData, products } = req.body;
    const order = new Order({ clientData, products });
    await order.save();
    res.status(201).json({ message: "Order added successfully", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding order", error: error.message });
  }
};

export default {
  addOrder,
};
