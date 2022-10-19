import express from 'express'
import dbConnect from "./src/dbConnect.js"
const app = express();
app.use(express.json());
const PORT = 3030;

app.get("/customers", async (req, res) => {
    const pool = dbConnect();
    let customers = await pool.query("SELECT * FROM customers")
    .catch(err => res.status(500).send(err));

    customers = JSON.stringify(customers.rows);
    res.send("<marquee style='font-size:72pt; color: blue; cursor: not-allowed'>"+customers+"</marquee>");
})

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}...`));