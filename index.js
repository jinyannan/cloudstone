var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Cloud Stone Studio. gogogo!')
})

app.listen(process.env.PORT || 5050)
