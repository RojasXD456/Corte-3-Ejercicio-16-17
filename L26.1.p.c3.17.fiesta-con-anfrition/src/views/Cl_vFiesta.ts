import { I_vFiesta } from "../interfaces/I_vFiesta";
import Cl_mInvitado from "../models/Cl_mInvitado";

const html = String.raw;

export default class Cl_vFiesta implements I_vFiesta {
  lblTotalConsumo: HTMLLabelElement;
  lblCantidadInvitados: HTMLLabelElement;
  lblPromedioEdad: HTMLLabelElement;
  btNuevoInvitado: HTMLButtonElement;
  tbInvitados: HTMLTableElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoInvitado = document.getElementById(
      "body_btNuevoInvitado",
    ) as HTMLButtonElement;
    this.lblTotalConsumo = document.getElementById(
      "body_lblTotalConsumo",
    ) as HTMLLabelElement;
    this.lblCantidadInvitados = document.getElementById(
      "body_lblCantidadInvitados",
    ) as HTMLLabelElement;
    this.lblPromedioEdad = document.getElementById(
      "body_lblPromedioEdad",
    ) as HTMLLabelElement;
    this.tbInvitados = document.getElementById(
      "body_invitados",
    ) as HTMLTableElement;
  }
  onNuevoInvitado(callback: () => void): void {
    this.btNuevoInvitado.onclick = callback;
  }
  mostrarInvitados({
    invitados,
    totalConsumo,
    cantidadInvitados,
    promedioEdad,
  }: {
    invitados: Cl_mInvitado[];
    totalConsumo: number;
    cantidadInvitados: number;
    promedioEdad: number;
  }): void {
    this.tbInvitados.innerHTML = "";
    invitados.forEach((invitado) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${invitado.cedula}</td>
        <td>${invitado.nombre}</td>
        <td>${invitado.edad}</td>
        <td>${invitado.consumo.toFixed(2)}</td>
      `;
      this.tbInvitados.appendChild(tr);
    });
    this.lblCantidadInvitados.innerHTML = cantidadInvitados.toString();
    this.lblTotalConsumo.innerHTML = totalConsumo.toFixed(2);
    this.lblPromedioEdad.innerHTML = promedioEdad.toFixed(2);
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