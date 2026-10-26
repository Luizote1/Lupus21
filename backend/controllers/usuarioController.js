import UsuarioRepository from "../repositories/usuarioRepository.js";



export default class UsuarioController{

    #repo;

    constructor(){
        this.#repo = new UsuarioRepository();
    }

    async listar(req, res){
        try{
            let lista = await this.#repo.listar();

            if(lista.length == 0){
                 return res.status(204).json();
            }

            else{
                return res.status(200).json(lista);
            }
        }
        
        catch(erro){
            console.log(erro);
            return res.status(500).json({msg: "Erro interno no servidor"}); 
        }




    }






}