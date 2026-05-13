import Cl_mTienda from "../models/Cl_mTienda.js";
import { I_vTienda } from "../interfaces/I_vTienda.js";
import Cl_cCliente from "./Cl_cCliente.js";

export default class Cl_cTienda {
  private mTienda: Cl_mTienda = new Cl_mTienda();
  private vTienda: I_vTienda;
  private cCliente: Cl_cCliente;

  constructor(vistaTienda: I_vTienda, controladorCliente: Cl_cCliente) {
    this.vTienda = vistaTienda;
    this.cCliente = controladorCliente;

    this.vTienda.onNuevoCliente(() => this.procesar1Cliente());
  }

  private procesar1Cliente() {
    this.cCliente.solicitarCliente((cliente) => {
      if (cliente !== null) {
        this.mTienda.agregarCliente(cliente);
        this.vTienda.mostrarClientes({
          clientes: this.mTienda.clientes,
          totalCobrado: this.mTienda.totalCobrado,
          cantidadClientes: this.mTienda.cantidadClientes(),
          frutas: this.mTienda.frutas,
          carne: this.mTienda.carne,
        });
      }
    });
  }
}