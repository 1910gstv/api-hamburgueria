const Pagamento = require("../models/Pagamentos");

async function getPayments(req, res) {
  try {
    const pagamentos = await Pagamento.findAll();
    return res.status(200).json(pagamentos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function createPayment(req, res) {
  const newPayment = req.body;

  try {
    const newPaymentCreated = await Pagamento.create(newPayment);
    return res.status(200).json(newPaymentCreated);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
}

async function updatePayment(req, res) {
  const { id } = req.params;
  const newInfo = req.body;

  try {
    await Pagamento.update(newInfo, {
      where: {
        id: Number(id),
      },
    });

    const updatedPagamento = await Pagamento.findOne({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json(updatePayment);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function deletePayment(req,res) {
    const { id } = req.params;

    try {
        await Pagamento.destroy({
            where: {
                id: Number(id)
            },
        });
        return res.status(200).json({mensagem: `O pagamento id=${id} foi deletada!`});
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
  getPayments,
  createPayment,
  updatePayment,
  deletePayment
};
