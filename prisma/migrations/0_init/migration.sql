-- CreateTable
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NULL
);

-- CreateTable
CREATE TABLE enderecos (
    id SERIAL PRIMARY KEY,
    logradouro VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

-- CreateTable
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(40) NOT NULL,
    endereco_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    data_pedido TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    valor_total DECIMAL(7, 2) NOT NULL,
    pagamentos_id INTEGER NOT NULL,
    usuario_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(250) NOT NULL,
    valor DECIMAL(7, 2) NOT NULL,
    categorias_id INTEGER NULL
);

-- CreateTable
CREATE TABLE pedidosprodutos (
    id SERIAL PRIMARY KEY,
    PedidoId INTEGER NULL,
    ProdutoId INTEGER NULL
);

-- Índices (No Postgres, são criados separadamente)
CREATE INDEX id_pagamentos_fk ON pedidos(pagamentos_id);
CREATE INDEX id_usuariosfk ON pedidos(usuario_id);
CREATE INDEX PedidoId_idx ON pedidosprodutos(PedidoId);
CREATE INDEX ProdutoId_idx ON pedidosprodutos(ProdutoId);
CREATE INDEX fk_id_categoria ON produtos(categorias_id);
CREATE INDEX id_endereco ON usuarios(endereco_id);

-- AddForeignKey
ALTER TABLE pedidos ADD CONSTRAINT id_pagamentos_fk FOREIGN KEY (pagamentos_id) REFERENCES pagamentos(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE pedidos ADD CONSTRAINT id_usuariosfk FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE pedidosprodutos ADD CONSTRAINT pedidosprodutos_ibfk_1 FOREIGN KEY (PedidoId) REFERENCES pedidos(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE pedidosprodutos ADD CONSTRAINT pedidosprodutos_ibfk_2 FOREIGN KEY (ProdutoId) REFERENCES produtos(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE produtos ADD CONSTRAINT fk_id_categoria FOREIGN KEY (categorias_id) REFERENCES categorias(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE usuarios ADD CONSTRAINT id_endereco FOREIGN KEY (endereco_id) REFERENCES enderecos(id) ON DELETE RESTRICT ON UPDATE RESTRICT;