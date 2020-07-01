const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

const port = 3000

app.set('views', __dirname + '/views');
app.set("view engine", 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/eventos', (req, res) => {
    res.render('eventos.ejs')
})
app.get('/pagos', (req, res) => {
    res.render('pagos.ejs')
})
app.get('/inicio', (req, res) => {
    res.render('index.ejs')
})
app.get('/productos', (req, res) => {
    res.render('products.ejs')
})

app.listen(port, () => {
    console.log("Servidor en el puerto: " , port)
})