import express from 'express';
import { parse } from 'path';

const app = express();
const port: number = 3000;


app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});

interface IUser {
    id: number, 
    name: string, 
    email: string, 
    isActive: boolean
}

const usuarios: IUser [ ]= [{
    name: "Adriano",
    id: 1,
    email: "naotem@gmail.com",
    isActive: true
},
{
    name: "Jose",
    id: 2,
    email: "jose@gmail.com",
    isActive: true
}];


app.get('/user', (req, res) => {
    res.status(200).json(usuarios);
});



app.get('/users/:id', (req, res) => {
    res.status(200).json(usuarios.find(user=>user.id == parseInt(req.params.id)))
});


app.post('/newuser', (req, res) => {
        
});

function adduser(user: IUser):void{ 
if (user && typeof user.id === 'number' && typeof user.name === 'string' && typeof user.isActive === "boolean" && user.email === 'string') {
    usuarios.push(user);
}
else {
    console.error("dados de usuario invalido, certifique-se de que o objeto user corresponder a interface 'IUser'")
}
}
const user: IUser = {
    id: 5,
    name: "Jorge",
    email: "jorge@gmail.com",
    isActive: false
}

adduser(user)
console.log ("usuario adicionado com sucesso")




/////////////////////////////////////////////////////////////////////




app.put('/attuser', (req, res) => {
    const { id, name, email } = req.body;
});

app.delete('/deleteuser', (req, res) => {
    const { id, name, email } = req.body;
});




/////////////////////////////////////////////////////////////////////




app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});
