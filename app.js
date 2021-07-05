const express = require('express')
const proxy = require('express-http-proxy')
const app = express()

app.use('/proxy', proxy('http://172.18.9.71:6001/'))

app.listen('6001', async (req, res) => {
    console.log('Servidor rodando na 6001');
})

