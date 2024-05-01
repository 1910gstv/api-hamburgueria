//DESCRIBE -> BLOCO DE TESTES - TESTS SUITES
//IT OR TEST -> DECLARA UM UNICO
// EXPECT -> ASSERÇÕES DO RESULTADO - VALIDAR RESULTADOS
const CategoriaController = require("../CategoriaController");
const Categoria = require("../../models/Categorias");
const axios = require("axios");

jest.mock("../../models/Categorias");
jest.mock("axios");

describe("Category Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  test("Should return error when categories not post", async () => {
    const req = {
      body: {
        descricao: "Descrição teste",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Categoria.create.mockRejectedValue(new Error("Mocking exception"));

    await CategoriaController.createCategory(req, res);
    expect(Categoria.create).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith("Internal Server Error");
  });

  test("Should return all categories", () => {
    const categoria = { descricao: "Bebidas" };

    const req = {
      req: jest.fn(),
    };

    const resp = {
      data: categoria,
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    axios.get.mockImplementation(() => Promise.resolve(resp));
    return CategoriaController.getAllCategories(req, resp).then(() =>
      expect(resp.data).toEqual(categoria)
    );
  });

  test("Should return error when all categories are called", async () => {
    const categoria = { descricao: "Bebidas" };

    const req = {
      req: jest.fn(),
    };

    const resp = {
      data: categoria,
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Categoria.create.mockRejectedValue(new Error("Mocking exception"));

    await CategoriaController.getAllCategories(req, resp);
    expect(Categoria.get).toHaveBeenCalledTimes(1);
    expect(resp.status).toHaveBeenCalledWith(500)
  });
});
