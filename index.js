const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
// API key pk_854cc9f43bbc43e9a2a7d4c7646bfe39

app.get('/', function (req, res) { res.render('home') })
app.get('/about', (req, res) => { res.render('about') })
app.get('/contact', (req, res) => { res.render('contact') })
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log('Server Lintening on port' + PORT))
