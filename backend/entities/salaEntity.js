import Entity from "./entity.js";
import UsuarioEntity from "./usuarioEntity.js";



export default class SalaEntity extends Entity{

    #id;
    #nome;
    #usuarioId;

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get nome(){
        return this.#nome;
    }

    set nome(value){
        this.#nome = value;
    }

    get usuarioId(){
        return this.#usuarioId;
    }

    set usuarioId(value){
        this.#usuarioId = value;
    }

    constructor(id, nome, usuarioId){
        super();
        this.#id = id;
        this.#nome = nome;
        this.#usuarioId = usuarioId;
    }

    static toMap(row){
       return new SalaEntity(row["sal_id"],
        row["sal_nome"],
        new UsuarioEntity(row["usu_id"])
       ); 
    }
}