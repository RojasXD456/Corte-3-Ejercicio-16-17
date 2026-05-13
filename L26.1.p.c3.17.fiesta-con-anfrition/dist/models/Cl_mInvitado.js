import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mInvitado extends Cl_mPersona {
    _edad = 0;
    _consumo = 0;
    constructor({ nombre, cedula, edad, consumo, }) {
        super({ nombre, cedula });
        this.edad = edad;
        this.consumo = consumo;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get edad() {
        return this._edad;
    }
    set consumo(consumo) {
        this._consumo = +consumo;
    }
    get consumo() {
        return this._consumo;
    }
}
