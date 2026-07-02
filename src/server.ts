import express from "express";
import session from "express-session";
import MemoryStoreFactory from "memorystore";


import {userRoutes} from "../routes/UsuarioRoutes";

const app = express();
const MemoryStore = MemoryStoreFactory(session);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", userRoutes);

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
    saveUninitialized: false, // faltava no original — sem isso o Express avisa/erra
  })
);

const port = 8082;

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});