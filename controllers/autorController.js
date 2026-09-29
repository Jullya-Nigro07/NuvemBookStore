import {autor} from "../model/Autor.js";


class AutorController{
    //static -> usar metodos sem precisar instaciar a class
    static async listarAutores(req, res){
        try{
            const listAutores = await autor.find({});
            res.status(200).json(listAutores);
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao listar os autores.`});
        };
        
    };


    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Criação realizada com sucesso!",
                autor: novoAutor});

        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao cadastrar o autor.`});
        };
    };


    static async buscarAutor(req, res){
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao buscar o autor.`});
        };
        
    };


    static async atualizarAutor(req, res){
        try{
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualização do autor realizada com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao atualizar o autor.`});
        };
    };


    static async deletarAutor(req, res){
        try{
            const id = req.params.id
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor deletado com sucesso!"})
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao deletar o livro.`});
        };
    };
};

export default AutorController;
