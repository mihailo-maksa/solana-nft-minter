const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const attributes = require('./attributes.json')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
  )
  next()
})

app.get('/', (req, res) => {
  const id = req.query.id

  res.json({
    image:
      `https://storageapi.fleek.co/d650124e-693a-4b1e-ae10-11d013a9d264-bucket/` +
      id +
      '.png',
    name: 'NFT_Collection_Name #' + id,
    id: id,
    description: `NFT_Collection custom description`,
    attributes: attributes[id],
  })
})

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Server is running on port ${PORT}...`)
})
