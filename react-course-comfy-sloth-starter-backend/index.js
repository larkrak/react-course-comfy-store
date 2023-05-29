const express = require("express");
require("dotenv").config();
const cors = require("cors");
var bodyParser = require("body-parser");

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

const YOUR_DOMAIN = "http://localhost:8080";

// Ruta de ejemplo
app.post("/create-payment", async (req, res) => {
  const { cart, shipping_fee, total_amount } = req.body;

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "EUR",
    });

    console.log({ clientSecret: paymentIntent.client_secret });

    return res.status(200).send({
      statusCode: 200,
      status: "success",
      body: { clientSecret: paymentIntent.client_secret },
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      status: "Internal server error",
      body: { error: error.message },
    });
  }

  //   res.json({ hola: "hola desde el back" });
});

// Iniciar el servidor
app.listen(8080, () => {
  console.log("El servidor está escuchando en el puerto 8080");
});
