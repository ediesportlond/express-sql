import express from 'express'
import { getAllCustomers, getCustomerById, addNewCustomer } from './src/customers.js';
const app = express();
app.use(express.json());
const PORT = 3030;

app.get("/", (req,res) => {
    const message = `<body style='background-color:cyan'><marquee style='font-size:72pt; color: blue; cursor: not-allowed'>Welcome to my API!</marquee><br>
    <div style='text-align:center'><a href='http://localhost:3030/customers' style='font-size:24pt; text-decoration:none'>Click Here to see all customers</a><br>
    <small>http://localhost:3030/customers</small><br>
    <img src='https://placekitten.com/500/500' alt='cat pic'><br>
    <img src='https://placebear.com/250/250' alt='bear pic'>
    <img src='https://placebear.com/249/249' alt='bear pic'>
    </div></body>`;
    res.send(message);
})
app.get("/customers", getAllCustomers);

app.get("/customers/:id", getCustomerById);

app.post("/customers/new", addNewCustomer);

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}...`));