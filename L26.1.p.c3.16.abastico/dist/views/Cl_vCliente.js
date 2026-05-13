export default class Cl_vClientePlain {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCedula;
    inCantFrutas;
    inCantCarne;
    constructor() {
        this.vista = document.getElementById("cliente");
        this.inNombre = document.getElementById("cliente_inNombre");
        this.inCedula = document.getElementById("cliente_inCedula");
        this.inCantFrutas = document.getElementById("cliente_inCantFrutas");
        this.inCantCarne = document.getElementById("cliente_inCantCarne");
        this.btCancelar = document.getElementById("cliente_btCancelar");
        this.btAceptar = document.getElementById("cliente_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get cantFrutas() {
        return this.inCantFrutas ? +this.inCantFrutas.value : 0;
    }
    get cantCarne() {
        return this.inCantCarne ? +this.inCantCarne.value : 0;
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
    limpiar() {
        this.inNombre.value = "";
        this.inCedula.value = "";
        this.inCantFrutas.value = "";
        this.inCantCarne.value = "";
    }
}
