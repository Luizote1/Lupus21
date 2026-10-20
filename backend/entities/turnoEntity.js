import Entity from "./entity.js";
import ParticipanteEntity from "./participanteEntity.js";
import RodadaEntity from "./rodadaEntity.js";


export default class TurnoEntity extends Entity{

    #id;
    #somaCartas;
    #status;
    #participanteId;
    #rodadaId;

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get somaCartas(){
        return this.#somaCartas;
    }

    set somaCartas(value){
        this.#somaCartas = value;
    }

    get status(){
        return this.#status;
    }

    set status(value){
        this.#status = value;
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

    constructor(id, somaCartas, status, participanteId, rodadaId){
        super();
        this.#id = id;
        this.#somaCartas = somaCartas;
        this.#status = status;
        this.#participanteId = participanteId;
        this.#rodadaId = rodadaId;
    }

    static toMap(row){
        return new TurnoEntity(row["tur_id"],
            row["tur_somacartas"],
            row["tur_status"],
            new ParticipanteEntity(row["par_id"]),
            new RodadaEntity("rod_id")
        )
    }
}