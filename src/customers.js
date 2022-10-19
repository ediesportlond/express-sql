import dbConnect from "./dbConnect.js";

export async function getAllCustomers(req, res) {
    const pool = dbConnect();
    let customers = await pool.query("SELECT * FROM customers")
        .catch(err => res.status(500).send(err));
    res.send(customers.rows);
}

export async function getCustomerById(req, res) {
    const pool = dbConnect();
    const { id } = req.params
    let customers = await pool.query("SELECT * FROM customers WHERE customer_id = " + id)
        .catch(err => res.status(500).send(err));
        if (customers.rows[0] === undefined) {
            res.send("404 Customer not found")
        } else {
        res.send(customers.rows);
    }
}

export async function addNewCustomer(req, res) {
    const pool = dbConnect();
    const { first_name, last_name, email, phone } = req.body;
    const query = `INSERT INTO customers 
    (first_name, last_name, email, phone, created_at) 
    VALUES ('${first_name}', '${last_name}', '${email}', '${phone}', NOW())`;
    const result = await pool.query(query)
        .catch(err => res.status(500).send(err));
    res.send(result);
}