export default class Cl_vClienteBootstrap {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCedula;
    inCantFrutas;
    inCantCarne;
    modal;
    constructor() {
        this.vista = document.getElementById("cliente");
        this.inNombre = document.getElementById("cliente_inNombre");
        this.inCedula = document.getElementById("cliente_inCedula");
        this.inCantFrutas = document.getElementById("cliente_inCantFrutas");
        this.inCantCarne = document.getElementById("cliente_inCantCarne");
        this.btCancelar = document.getElementById("cliente_btCancelar");
        this.btAceptar = document.getElementById("cliente_btAceptar");
        // También enlazar el botón Cancelar del footer
        const btCancelarFooter = document.getElementById("cliente_btCancelarFooter");
        if (btCancelarFooter) {
            btCancelarFooter.onclick = () => this.btCancelar.click();
        }
        // Inicializar modal Bootstrap
        const modalElement = document.getElementById("cliente");
        if (modalElement) {
            this.modal = new window.bootstrap.Modal(modalElement, {
                backdrop: "static",
                keyboard: false,
            });
        }
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
        if (this.modal) {
            this.modal.show();
        }
        else if (this.vista) {
            this.vista.hidden = false;
        }
    }
    ocultar() {
        if (this.modal) {
            this.modal.hide();
        }
        else if (this.vista) {
            this.vista.hidden = true;
        }
    }
    limpiar() {
        this.inNombre.value = "";
        this.inCedula.value = "";
        this.inCantFrutas.value = "0";
        this.inCantCarne.value = "0";
    }
}
