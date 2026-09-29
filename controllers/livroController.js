import { autor } from "../model/Autor.js";
import livro from "../model/Livro.js";


class LivroController{
    //static -> usar metodos sem precisar instaciar a class
    static async listarLivros(req, res){
        try{
            const listLivros = await livro.find({});
            res.status(200).json(listLivros);
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao listar os livros.`});
        };
        
    };


    static async cadastrarLivro(req, res){
        const dadosLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(dadosLivro.autor);
            const autorLivro = {...dadosLivro, autor:{...autorEncontrado._doc}};

            const novoLivro = await livro.create(autorLivro);

            res.status(201).json({
                message: "Criação realizada com sucesso!",
                livro: novoLivro});

        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao cadastrar o livro.`});
        };
    };


    static async buscarLivro(req, res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao buscar o livro.`});
        };
        
    };


    static async atualizarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualização do livro realizada com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao atualizar o livro.`});
        };
    };


    static async deletarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso!"})
        }catch(error){
            res.status(500).json({message: `${error.message} - FALHA ao deletar o livro.`});
        };
    };
};

export default LivroController;
