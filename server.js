// Backend básico com Express
const express = require('express');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

