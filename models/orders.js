import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  clientData: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  products: [
    {
      name: { type: String, required: true },
      id: { type: String, required: true },
      shopId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
