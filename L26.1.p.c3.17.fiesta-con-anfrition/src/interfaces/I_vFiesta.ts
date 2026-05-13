import Cl_mInvitado from "../models/Cl_mInvitado";

// src/interfaces/I_vFiesta.ts
export interface I_vFiesta {
  onNuevoInvitado(callback: () => void): void;
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
  }): void;
}