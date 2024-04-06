const express = require("express");
const app = express();
const session = require("express-session");
const connection = require("./database/database");
const bodyParser = require("body-parser");

const CategoriaController = require('./routes/CategoriasRoutes')
const EnderecoController = require('./routes/EnderecosRoutes')
const PagamentoController = require('./routes/PagamentosRoutes')
const PedidoController = require('./routes/PedidosRoutes')
const PedidoProdutoController = require('./routes/PedidosProdutosRoutes')
const ProdutoController = require('./routes/ProdutosRoutes')
const UsuarioController = require('./routes/UsuarioRoutes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', CategoriaController);
app.use('/', EnderecoController);
app.use('/', PagamentoController);
app.use('/', PedidoController);
app.use('/', PedidoProdutoController);
app.use('/', ProdutoController);
app.use('/', UsuarioController);

app.use(
  session({
    secret: "laia",
    cookie: {
      maxAge: 30000000000,
    },
  })
);

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o servidor");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 8082;

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
