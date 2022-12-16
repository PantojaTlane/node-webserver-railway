//Utilizar partials
const hbs = require('hbs');

require('dotenv').config();

const express = require('express')
const app = express();
const port = process.env.PORT;


//TODO require('hbs')
app.set('view engine', 'hbs');

//Utilizar partials
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico, hacer publico la carpeta 'public'
app.use(express.static('public'));//sirve con el res.sendFile(__dirname + '/public/elements.html');

//¿como renederizar vistas con habdlebars?
app.get('/', (req, res) => {
    //res.send('home');
    res.render('home',{
        nombre: 'Dani',
        titulo: 'Curso de node'
    });//Podemos mandar argumentos
})

app.get('/elements', (req,res) => {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements',{
        nombre: 'Dani',
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req,res) => {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic',{
        nombre: 'Dani',
        titulo: 'Curso de node'
    });
});

app.get('*',  (req, res) => {
    //res.send('Page Not Found')   Solo manda texto
    //res.sendFile(__dirname + '/public/404.html');
    res.send('Page Not Found');
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});