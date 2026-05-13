import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mInvitado extends Cl_mPersona {
  private _edad: number = 0;
  private _consumo: number = 0;

  constructor({
    nombre,
    cedula,
    edad,
    consumo,
  }: {
    nombre: string;
    cedula: number;
    edad: number;
    consumo: number;
  }) {
    super({ nombre, cedula });
    this.edad = edad;
    this.consumo = consumo;
  }

  set edad(edad: number) {
    this._edad = +edad;
  }
  get edad(): number {
    return this._edad;
  }
  set consumo(consumo: number) {
    this._consumo = +consumo;
  }
  get consumo(): number {
    return this._consumo;
  }
}