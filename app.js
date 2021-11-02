const express = require('express');
const app = express();
const PORT = 3000
let path = require('path')

//midd
app.use(express.static('public'))

//Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`))  