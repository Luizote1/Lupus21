import Entity from "./entity.js";
import SalaEntity from "./salaEntity.js";



export default class RodadaEntity extends Entity{

    #id;
    #codigoBaralho;
    #dataInicio;
    #dataFim;
    #salaId;

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get codigoBaralho(){
        return this.#codigoBaralho;
    }

    set codigoBaralho(value){
        this.#codigoBaralho = value;
    }

    get dataInicio(){
        return this.#dataInicio;
    }

    set dataInicio(value){
        this.#dataInicio = value;
    }

    get dataFim(){
        return this.#dataFim;
    }

    set dataFim(value){
        this.#dataFim = value;
    }

    get salaId(){
        return this.#salaId;
    }

    set salaId(value){
        this.#salaId = value;
    }

    constructor(id, codigoBaralho, dataInicio, dataFim, salaId){
        super();
        this.#id = id;
        this.#codigoBaralho = codigoBaralho;
        this.#dataInicio = dataInicio;
        this.#dataFim = dataFim;
        this.#salaId = salaId;
    }

    static toMap(row){
        return new RodadaEntity(row["rod_id"],
            row["rod_dtinicio"],
            row["dtfim"],
            new SalaEntity(row["sal_id"])
        );
    }
}