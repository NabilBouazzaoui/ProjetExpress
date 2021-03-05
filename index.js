const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()


const path = require('path')
const PORT = process.env.PORT || 5000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home')
})

app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => console.log('Server Lintening on port' + PORT))