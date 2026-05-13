import Cl_mInvitado from "../models/Cl_mInvitado.js";
export default class Cl_cInvitado {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarInvitado(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mInvitado({
            nombre: this.vista.nombre,
            cedula: this.vista.cedula,
            edad: this.vista.edad,
            consumo: this.vista.consumo,
        }));
        this.vista.ocultar();
    }
}
