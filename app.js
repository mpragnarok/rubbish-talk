// require modules and port setting
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./talk_generator')
const port = process.env.PORT || 3000

// add express-handlebars helper
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main'
})

// setup static files
app.use(express.static('public'))

// setup handlebars engine and use .hbs as file extension

app.engine(hbs.extname, hbs.engine, hbs.extname, hbs.defaultLayout)
// app.engine('.hbs', hbs.engine)
app.set('view engine', hbs.extname)


// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// route setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const target = req.body.target
  const sentence = generateTalk(target)



  res.render('index', {
    sentence,
    target
  })
})

// setup listener to Express server
app.listen(port, () => {
  console.log('Server is started')
})