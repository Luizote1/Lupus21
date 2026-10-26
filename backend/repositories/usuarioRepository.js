import UsuarioEntity from "../entities/usuarioEntity.js";
import Database from "../utils/database.js";

export default class UsuarioRepository {

    #banco;

    constructor(){
        this.#banco = new Database();
    }

    async listar(){

        let sql = "select * from tb_usuario";

        let rows = await this.#banco.ExecutaComando(sql);

        let lista = [];

        if(rows.length > 0){
            for(let row of rows){
                lista.push(UsuarioEntity.toMap(row));
            }
        }

        return lista;

    }

    async obterPorEmailSenha(email, senha){

        let sql = "select * from tb_usuario where usu_email = ? and usu_senha = ?";

        let valores = [email, senha];

        let rows = await this.#banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            return UsuarioEntity.toMap(rows[0]);
        }

        return null;

    }

    async obterPorId(id){

        let sql = "select * from tb_usuario where usu_id = ?";

        let valores = [id];

        let rows = await this.#banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            return UsuarioEntity.toMap(rows[0]);
        }

        return null;

    }






}