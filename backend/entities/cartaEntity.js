import Entity from "./entity";
import ParticipanteEntity from "./participanteEntity";
import RodadaEntity from "./rodadaEntity";




export default class CartaEntity extends Entity{

    #id;
    #codigo;
    #imagem;
    #ordem;
    #visivel;
    #valor;
    #naipe;
    #participanteId;
    #rodadaId;

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(value){
        this.#codigo = value;
    }

    get imagem(){
        return this.#imagem;
    }

    set imagem(value){
        this.#imagem = value;
    }

    get ordem(){
        return this.#ordem;
    }

    set ordem(value){
        this.#ordem = value;
    }

    get visivel(){
        return this.#visivel;
    }

    set visivel(value){
        this.#visivel = value;
    }

    get valor(){
        return this.#valor;
    }

    set valor(value){
        this.#valor = value;
    }

    get naipe(){
        return this.#naipe;
    }

    set naipe(value){
        this.#naipe = value;
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

    constructor(id, codigo, imagem, ordem, visivel, valor, naipe, participanteId, rodadaId){
        super();
        this.#id = id;
        this.#codigo = codigo;
        this.#imagem = imagem;
        this.#ordem = ordem;
        this.#visivel = visivel;
        this.#valor = valor;
        this.#naipe = naipe;
        this.#participanteId = participanteId;
        this.#rodadaId = rodadaId;
    }


    static toMap(row){
        return new CartaEntity(row["car_id"],
            row["car_codigo"],
            row["car_imagem"],
            row["car_ordem"],
            row["car_visivel"],
            row["car_valor"],
            row["car_naipe"],
            new ParticipanteEntity(row["par_id"]),
            new RodadaEntity(row["rod_id"])
        )
    }

}