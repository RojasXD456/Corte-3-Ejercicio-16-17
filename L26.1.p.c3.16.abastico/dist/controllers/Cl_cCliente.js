import Cl_mCliente from "../models/Cl_mCliente.js";
export default class Cl_cCliente {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarCliente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mCliente({
            nombre: this.vista.nombre,
            cedula: this.vista.cedula,
            cantFrutas: this.vista.cantFrutas,
            cantCarne: this.vista.cantCarne,
        }));
        this.vista.ocultar();
        this.vista.limpiar();
    }
}
