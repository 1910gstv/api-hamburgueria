//DESCRIBE -> BLOCO DE TESTES - TESTS SUITES
//IT OR TEST -> DECLARA UM UNICO 
// EXPECT -> ASSERÇÕES DO RESULTADO - VALIDAR RESULTADOS
const CategoriaController = require("../CategoriaController");
const Categoria = require("../../models/Categorias");

jest.mock("../../models/Categorias")

describe("Category Controller", () => {
  test("Should post categories successfully", async () => {
    const req = {
      body: {
        descricao: "Descrição teste",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await CategoriaController.createCategory(req, res);
    expect(Categoria.create).toHaveBeenCalledTimes(1);
    expect(Categoria.create).toHaveBeenCalledWith({
      descricao: "Descrição teste",
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
});
