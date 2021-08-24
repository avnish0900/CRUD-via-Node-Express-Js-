import express from "express";
const app = express();
import usersRoutes from './routes/users.js';

const PORT =  3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/ak", (req, res) =>   {
    console.log("yes in ak");
    console.log(req.body);
    res.send(req.body);
})
app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
