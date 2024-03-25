const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // Serve os arquivos estáticos da pasta atual

app.use(bodyParser.urlencoded({ extended: true })) // Para interpretar os dados do formulário

app.use(bodyParser.json()) // Para interpretar os dados do formulário

app.get('/teste'), (req, res) => res.send('OK') // Rota de teste

app.listen(8080, () => console.log('Executando...')) // Porta de execução


