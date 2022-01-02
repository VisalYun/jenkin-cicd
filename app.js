const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json('Hello World!!!')
})

app.listen(3000, () => {
    console.log('Connect to server!')
})