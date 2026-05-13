import { I_vCliente } from "../interfaces/I_vCliente.js";

export default class Cl_vClienteBootstrap implements I_vCliente {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCedula: HTMLInputElement;
  inCantFrutas: HTMLInputElement;
  inCantCarne: HTMLInputElement;
  modal: any;

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

    // También enlazar el botón Cancelar del footer
    const btCancelarFooter = document.getElementById(
      "cliente_btCancelarFooter",
    );
    if (btCancelarFooter) {
      btCancelarFooter.onclick = () => this.btCancelar.click();
    }

    // Inicializar modal Bootstrap
    const modalElement = document.getElementById("cliente");
    if (modalElement) {
      this.modal = new (window as any).bootstrap.Modal(modalElement, {
        backdrop: "static",
        keyboard: false,
      });
    }
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
    if (this.modal) {
      this.modal.show();
    } else if (this.vista) {
      this.vista.hidden = false;
    }
  }
  ocultar(): void {
    if (this.modal) {
      this.modal.hide();
    } else if (this.vista) {
      this.vista.hidden = true;
    }
  }
  limpiar(): void {
    this.inNombre.value = "";
    this.inCedula.value = "";
    this.inCantFrutas.value = "0";
    this.inCantCarne.value = "0";
  }
}