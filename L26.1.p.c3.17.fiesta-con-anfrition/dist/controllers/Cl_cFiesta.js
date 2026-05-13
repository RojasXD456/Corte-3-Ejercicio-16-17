import Cl_mFiesta from "../models/Cl_mFiesta.js";
export default class Cl_cFiesta {
    mFiesta = new Cl_mFiesta();
    vFiesta;
    cInvitado;
    constructor(vistaFiesta, controladorInvitado) {
        this.vFiesta = vistaFiesta;
        this.cInvitado = controladorInvitado;
        this.vFiesta.onNuevoInvitado(() => this.procesar1Invitado());
    }
    procesar1Invitado() {
        this.cInvitado.solicitarInvitado((invitado) => {
            if (invitado !== null) {
                this.mFiesta.agregarInvitado(invitado);
                this.vFiesta.mostrarInvitados({
                    invitados: this.mFiesta.invitados,
                    totalConsumo: this.mFiesta.totalConsumo(),
                    cantidadInvitados: this.mFiesta.cantidadInvitados(),
                    promedioEdad: this.mFiesta.promedioEdad(),
                });
            }
        });
    }
}
