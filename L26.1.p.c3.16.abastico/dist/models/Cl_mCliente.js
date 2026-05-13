export default class Cl_mCliente {
    _nombre = "";
    _cedula = 0;
    _cantFrutas = 0;
    _cantCarne = 0;
    _montoPagar = 0;
    constructor({ nombre, cedula, cantFrutas, cantCarne, }) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.cantFrutas = cantFrutas;
        this.cantCarne = cantCarne;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(value) {
        this._cedula = +value;
    }
    set cantFrutas(cantFrutas) {
        this._cantFrutas = +cantFrutas;
    }
    get cantFrutas() {
        return this._cantFrutas;
    }
    set cantCarne(cantCarne) {
        this._cantCarne = +cantCarne;
    }
    get cantCarne() {
        return this._cantCarne;
    }
    get montoPagar() {
        return this._montoPagar;
    }
    set montoPagar(value) {
        this._montoPagar = +value;
    }
}
