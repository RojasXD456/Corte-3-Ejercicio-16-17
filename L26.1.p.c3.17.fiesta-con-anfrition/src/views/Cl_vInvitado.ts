import { I_vInvitado } from "../interfaces/I_vInvitado";

export default class Cl_vInvitadoPlain implements I_vInvitado {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCedula: HTMLInputElement;
  inEdad: HTMLInputElement;
  inConsumo: HTMLInputElement;
  constructor() {
    this.vista = document.getElementById("invitado") as HTMLElement;
    this.inNombre = document.getElementById(
      "invitado_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "invitado_inCedula",
    ) as HTMLInputElement;
    this.inEdad = document.getElementById(
      "invitado_inEdad",
    ) as HTMLInputElement;
    this.inConsumo = document.getElementById(
      "invitado_inConsumo",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "invitado_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "invitado_btAceptar",
    ) as HTMLButtonElement;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get edad(): number {
    return this.inEdad ? +this.inEdad.value : 0;
  }
  get consumo(): number {
    return this.inConsumo ? +this.inConsumo.value : 0;
  }
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
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