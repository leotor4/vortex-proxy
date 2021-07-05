const express = require('express')
const proxy = require('express-http-proxy')
const app = express()



app.use('/proxy', proxy('172.18.9.71:3000/'));


app.listen('6002', async (req, res) => {
    console.log('Servidor rodando na 6002');
})

