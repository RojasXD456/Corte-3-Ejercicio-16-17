import { I_vTienda } from "../interfaces/I_vTienda";
import Cl_mCliente from "../models/Cl_mCliente";
import Cl_mProducto from "../models/Cl_mProducto";

const html = String.raw;

export default class Cl_vTiendaBootstrap implements I_vTienda {
  lblTotalCobrado: HTMLLabelElement;
  lblCantidadClientes: HTMLLabelElement;
  lblFrutasDisponible: HTMLLabelElement;
  lblCarneDisponible: HTMLLabelElement;
  btNuevoCliente: HTMLButtonElement;
  tbClientes: HTMLTableElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoCliente = document.getElementById(
      "body_btNuevoCliente",
    ) as HTMLButtonElement;
    this.lblTotalCobrado = document.getElementById(
      "body_lblTotalCobrado",
    ) as HTMLLabelElement;
    this.lblCantidadClientes = document.getElementById(
      "body_lblCantidadClientes",
    ) as HTMLLabelElement;
    this.lblFrutasDisponible = document.getElementById(
      "body_lblFrutasDisponible",
    ) as HTMLLabelElement;
    this.lblCarneDisponible = document.getElementById(
      "body_lblCarneDisponible",
    ) as HTMLLabelElement;
    this.tbClientes = document.getElementById(
      "body_clientes",
    ) as HTMLTableElement;
  }
  onNuevoCliente(callback: () => void): void {
    this.btNuevoCliente.onclick = callback;
  }
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
  }): void {
    this.tbClientes.innerHTML = "";
    clientes.forEach((cliente) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${cliente.cedula}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.cantFrutas}</td>
        <td>${cliente.cantCarne}</td>
        <td>$${cliente.montoPagar.toFixed(2)}</td>
      `;
      this.tbClientes.appendChild(tr);
    });
    this.lblCantidadClientes.innerHTML = cantidadClientes.toString();
    this.lblTotalCobrado.innerHTML = totalCobrado.toFixed(2);
    this.lblFrutasDisponible.innerHTML = frutas.cantidadDisponible.toString();
    this.lblCarneDisponible.innerHTML = carne.cantidadDisponible.toString();
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}