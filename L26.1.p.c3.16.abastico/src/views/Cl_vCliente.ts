import { I_vCliente } from "../interfaces/I_vCliente";

export default class Cl_vClientePlain implements I_vCliente {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCedula: HTMLInputElement;
  inCantFrutas: HTMLInputElement;
  inCantCarne: HTMLInputElement;
  constructor() {
    this.vista = document.getElementById("cliente") as HTMLElement;
    this.inNombre = document.getElementById(
      "cliente_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "cliente_inCedula",
    ) as HTMLInputElement;
    this.inCantFrutas = document.getElementById(
      "cliente_inCantFrutas",
    ) as HTMLInputElement;
    this.inCantCarne = document.getElementById(
      "cliente_inCantCarne",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "cliente_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "cliente_btAceptar",
    ) as HTMLButtonElement;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get cantFrutas(): number {
    return this.inCantFrutas ? +this.inCantFrutas.value : 0;
  }
  get cantCarne(): number {
    return this.inCantCarne ? +this.inCantCarne.value : 0;
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
  limpiar(): void {
    this.inNombre.value = "";
    this.inCedula.value = "";
    this.inCantFrutas.value = "";
    this.inCantCarne.value = "";
  }
}