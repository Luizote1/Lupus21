import Entity from "./entity.js";
import ParticipanteEntity from "./participanteEntity.js";
import RodadaEntity from "./rodadaEntity.js";


export default class ApostaEntity extends Entity{

    #id;
    #valor;
    #participanteId;
    #rodadaId;

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get valor(){
        return this.#valor;
    }

    set valor(value){
        this.#valor = value;
    }

    get participanteId(){
        return this.#participanteId;
    }

    set participanteId(value){
        this.#participanteId = value;
    }

    get rodadaId(){
        return this.#rodadaId;
    }

    set rodadaId(value){
        this.#rodadaId = value;
    }

    constructor(id, valor, participanteId, rodadaId){
        super();
        this.#id = id;
        this.#valor = valor;
        this.#participanteId = participanteId;
        this.#rodadaId = rodadaId;
    }

    static toMap(){
        return new ApostaEntity(row["apo_id"],
            row["apo_valor"],
            new ParticipanteEntity(row["par_id"]),
            new RodadaEntity(row["rod_id"])
        )
    }

}