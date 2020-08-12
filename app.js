const express = require('express')
const responseTime = require('moment-timezone')
const app = express()
const port = 3000

app.use((req, res, next) => {
  let startTime = new Date()
  let year = startTime.getFullYear()
  let month = startTime.getMonth() + 1
  let date = startTime.getDate()
  let hour = startTime.getHours()
  let min = startTime.getMinutes()
  let sec = startTime.getSeconds()
  let milliSec = startTime.getMilliseconds()
  let now = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec + ' ' + req.method + ' ' + 'from' + ' ' + req.originalUrl
  res.on('finish', () => {
    let endTime = new Date()
    let runTime = endTime - startTime
    let serverLog = now + ' ' + req.method + ' ' + 'from' + ' ' + req.originalUrl + ' ' + 'duration:' + ' ' + runTime + 'ms'
    console.log(serverLog)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})