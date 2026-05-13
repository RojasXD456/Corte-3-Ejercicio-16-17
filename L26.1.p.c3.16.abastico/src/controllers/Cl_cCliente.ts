import { I_vCliente } from "../interfaces/I_vCliente.js";
import Cl_mCliente from "../models/Cl_mCliente.js";

export default class Cl_cCliente {
  private vista: I_vCliente;
  private callback!: (cliente: Cl_mCliente | null) => void;
  constructor(vista: I_vCliente) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
    
  }
  solicitarCliente(callback: (cliente: Cl_mCliente | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mCliente({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        cantFrutas: this.vista.cantFrutas,
        cantCarne: this.vista.cantCarne,
      }),
    );
    this.vista.ocultar();
    this.vista.limpiar();
  }
}