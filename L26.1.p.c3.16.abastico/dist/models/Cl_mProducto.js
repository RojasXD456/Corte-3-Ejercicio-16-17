export default class Cl_mProducto {
    _nombre = "";
    _cantidadDisponible = 0;
    _precio = 0;
    constructor({ nombre, cantidadDisponible, precio, }) {
        this.nombre = nombre;
        this.cantidadDisponible = cantidadDisponible;
        this.precio = precio;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get cantidadDisponible() {
        return this._cantidadDisponible;
    }
    set cantidadDisponible(value) {
        this._cantidadDisponible = +value;
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = +value;
    }
    descontarInventario(cantidad) {
        this._cantidadDisponible -= cantidad;
    }
}
