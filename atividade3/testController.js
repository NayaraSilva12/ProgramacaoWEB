exports.testeGet = async (req, res) => {

     try {
          const result = "Sucesso no teste.";
          return res.status(200).json({ message: result });
     }


     catch (error) {
          const message = "Solicitação falhou: ";
          res.status(424).send(message + error.message)
     }

};

exports.validarGet = async (req, res) => {

     try {
          const result = "Sucesso no teste.";
          return res.status(200).json({ message: result });
     }


     catch (error) {
          const message = "Solicitação falhou: ";
          res.status(424).send(message + error.message)
     }

};

exports.validarPost = async (req, res) => {

     try {
          const result = "Sucesso no teste.";
          return res.status(200).json({ message: result });
     }


     catch (error) {
          const message = "Solicitação falhou: ";
          res.status(424).send(message + error.message)
     }

};

exports.validarPost = async (req, res) => {

     try {
          const result = "Sucesso no teste.";
          return res.status(200).json({ message: result });
     }


     catch (error) {
          const message = "Solicitação falhou: ";
          res.status(424).send(message + error.message)
     }

};

exports.validarPut = async (req, res) => {

     try {
          const result = "Sucesso no teste.";
          return res.status(200).json({ message: result });
     }


     catch (error) {
          const message = "Solicitação falhou: ";
          res.status(424).send(message + error.message)
     }

};