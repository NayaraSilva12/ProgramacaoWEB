
exports.teste = async (req,res) => {
  
    try {
        const result = "Teste com sucesso.";
        return res.status(200).json({message: result});
   } 
   
   
   catch (error) {
        const message = "Solicitação falhou: ";
        res.status(424).send(message + error.message)
   }

};