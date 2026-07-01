import { PrismaUserRepository } from "./infra/repositories/prismaUserRepository";


async function rodarTeste() {
    const repo = new PrismaUserRepository();

    try {
        console.log("Tentando salvar no banco...");
        const resultado = await repo.save({
            name: 'Gustavof',
            lastname: 'Henrique',
            email: 'gustavo' + Math.random() + '@paula.com', // Usando random para não dar erro de email duplicado se rodar duas vezes
            password: '123456'
        });

        console.log("Sucesso! Usuário retornado pelo domínio:", resultado);
    } catch (error) {
        console.error("Erro ao salvar no banco:", error);
    }
}


rodarTeste();