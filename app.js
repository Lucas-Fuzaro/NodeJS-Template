const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.options('*', cors())
app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.use(routes)

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    next()
})

app.listen(app.get('port'), () => {
    console.log(`\t\tServer running on http://localhost:${app.get('port')}\t\t`)
    console.log('\t\tTo shut it down: Ctrl + C\t\t');
})