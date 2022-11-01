const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');

const stripe = require('stripe')(
  'sk_test_51Hrf8PJNLaQB7IjEIkwcxm6vt5x0GL3IWjA4kshzZKVCbZPTwHqhn0RkJTNq39jfle8XMDHbdHINiYo9Zd1zLROD00cYszDPiI'
);

//API
//app config
const app = express();
//Middleware
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('hello '));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment received my nigaa ', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

// http function initialized (http://localhost:5001/looku-ecommerce/us-central1/api)
