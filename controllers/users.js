import { v4 as uuid } from 'uuid';
import express from "express";
const app = express();



app.use(express.json());


let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${JSON.stringify(users)}`);

    res.send(JSON.stringify(users));
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.name}] added to the database.`);
    res.send("New User Added Successfully");
};

export const getUser = (req, res) => {
    const user = req.body;
    console.log(`User [${JSON.stringify(user.name)}] rendered.`);
    res.send(JSON.stringify(req.body));
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
    res.send("User Deleted Successfully");
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.name}.age has been updated to ${req.body.age}`)
    res.send("User Changed Successfully");
};