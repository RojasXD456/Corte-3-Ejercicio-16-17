import Cl_mFiesta from "../models/Cl_mFiesta.js";
import { I_vFiesta } from "../interfaces/I_vFiesta.js";
import Cl_cInvitado from "./Cl_cInvitado.js";

export default class Cl_cFiesta {
  private mFiesta: Cl_mFiesta = new Cl_mFiesta();
  private vFiesta: I_vFiesta;
  private cInvitado: Cl_cInvitado;

  constructor(vistaFiesta: I_vFiesta, controladorInvitado: Cl_cInvitado) {
    this.vFiesta = vistaFiesta;
    this.cInvitado = controladorInvitado;

    this.vFiesta.onNuevoInvitado(() => this.procesar1Invitado());
  }

  private procesar1Invitado() {
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