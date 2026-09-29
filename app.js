import express from "express";
import conectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";


try{
    const conexao = await conectDatabase();
    conexao.once("open", () =>{
        console.log("Conexão realizada com sucesso!")
    });

    conexao.on("error", (erro) => {
        console.error("ERROR: Erro ao conectar com o banco de dados: ", erro)
    })

}catch(erro){
    console.log("Erro de conexão com o banco de dados: ", erro);
}

//instanciando as funções do express em app
const app = express();
routes(app);

export default app
