import express from "express";
import session from "express-session";
import MemoryStoreFactory from "memorystore";
import * as dotenv from 'dotenv';

import {userRoutes} from "./routes/UsuarioRoutes";
import {productRoutes} from "./routes/ProdutosRoutes";
import {cartRoutes} from "./routes/CartRoutes";

const app = express();
const MemoryStore = MemoryStoreFactory(session);

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

app.use(
  session({
    secret: "laia",
    cookie: {
      maxAge: 86400000,
    },
    store: new MemoryStore({
      checkPeriod: 86400000,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

const port = 8082;

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});