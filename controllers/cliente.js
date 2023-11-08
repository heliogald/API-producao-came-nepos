import { db } from "../db.js";

export const getClientes = (_, res) => {
  const q = "SELECT * FROM clientes;"

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.status(200).json(data);
  });
};

export const addClientes = (req, res) => {
const q = "INSERT INTO clientes(`nomeCliente`) VALUE(?)";

  const values = [
    req.body.nomeCliente        
  ];

  console.log(values);
  console.log(req.body);

  db.query(q, [values], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Cliente cadastrado com sucesso");
  });
};

export const updateClientes = (req, res) => {
  const q = 
    "UPDATE clientes SET `nomeCliente` = ? WHERE `id` = ?";

  const values = [
    req.body.nomeCliente     
  ];

  db.query(q, [...values, req.params.id], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Cliente atualizado com sucesso");
  });
};

export const deleteClientes = (req, res) => {
  const q = "DELETE FROM clientes WHERE `id` = ?";

  db.query(q, [req.params.id], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Cliente deletado com sucesso");
  });
};
