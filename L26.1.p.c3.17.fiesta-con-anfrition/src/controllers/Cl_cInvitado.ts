import { I_vInvitado } from "../interfaces/I_vInvitado.js";
import Cl_mInvitado from "../models/Cl_mInvitado.js";

export default class Cl_cInvitado {
  private vista: I_vInvitado;
  private callback!: (invitado: Cl_mInvitado | null) => void;
  constructor(vista: I_vInvitado) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  solicitarInvitado(callback: (invitado: Cl_mInvitado | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mInvitado({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        edad: this.vista.edad,
        consumo: this.vista.consumo,
      }),
    );
    this.vista.ocultar();
  }
}