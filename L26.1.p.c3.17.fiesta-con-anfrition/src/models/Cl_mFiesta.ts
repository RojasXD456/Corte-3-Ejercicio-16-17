import Cl_mInvitado from "./Cl_mInvitado.js";

export default class Cl_mFiesta {
  public invitados: Cl_mInvitado[] = [];

  agregarInvitado(invitado: Cl_mInvitado) {
    this.invitados.push(invitado);
  }

  totalConsumo(): number {
    let total = 0;
    this.invitados.forEach((invitado) => (total += invitado.consumo));
    return total;
  }

  cantidadInvitados(): number {
    return this.invitados.length;
  }

  promedioEdad(): number {
    if (this.invitados.length === 0) return 0;
    let total = 0;
    this.invitados.forEach((invitado) => (total += invitado.edad));
    return total / this.invitados.length;
  }
}