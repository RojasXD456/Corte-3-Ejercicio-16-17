import Cl_mCliente from "../models/Cl_mCliente.js";
import Cl_mProducto from "../models/Cl_mProducto.js";

export interface I_vTienda {
  onNuevoCliente(callback: () => void): void;
  mostrarClientes({
    clientes,
    totalCobrado,
    cantidadClientes,
    frutas,
    carne,
  }: {
    clientes: Cl_mCliente[];
    totalCobrado: number;
    cantidadClientes: number;
    frutas: Cl_mProducto;
    carne: Cl_mProducto;
  }): void;
}