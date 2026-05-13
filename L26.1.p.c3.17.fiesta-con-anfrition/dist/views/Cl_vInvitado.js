export default class Cl_vInvitadoPlain {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCedula;
    inEdad;
    inConsumo;
    constructor() {
        this.vista = document.getElementById("invitado");
        this.inNombre = document.getElementById("invitado_inNombre");
        this.inCedula = document.getElementById("invitado_inCedula");
        this.inEdad = document.getElementById("invitado_inEdad");
        this.inConsumo = document.getElementById("invitado_inConsumo");
        this.btCancelar = document.getElementById("invitado_btCancelar");
        this.btAceptar = document.getElementById("invitado_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get edad() {
        return this.inEdad ? +this.inEdad.value : 0;
    }
    get consumo() {
        return this.inConsumo ? +this.inConsumo.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
