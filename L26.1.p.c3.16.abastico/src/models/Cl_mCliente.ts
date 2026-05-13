export default class Cl_mCliente {
  private _nombre: string = "";
  private _cedula: number = 0;
  private _cantFrutas: number = 0;
  private _cantCarne: number = 0;
  private _montoPagar: number = 0;

  constructor({
    nombre,
    cedula,
    cantFrutas,
    cantCarne,
  }: {
    nombre: string;
    cedula: number;
    cantFrutas: number;
    cantCarne: number;
  }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.cantFrutas = cantFrutas;
    this.cantCarne = cantCarne;
  }

  get nombre(): string {
    return this._nombre;
  }
  set nombre(value: string) {
    this._nombre = value;
  }

  get cedula(): number {
    return this._cedula;
  }
  set cedula(value: number) {
    this._cedula = +value;
  }

  set cantFrutas(cantFrutas: number) {
    this._cantFrutas = +cantFrutas;
  }
  get cantFrutas(): number {
    return this._cantFrutas;
  }

  set cantCarne(cantCarne: number) {
    this._cantCarne = +cantCarne;
  }
  get cantCarne(): number {
    return this._cantCarne;
  }

  get montoPagar(): number {
    return this._montoPagar;
  }
  set montoPagar(value: number) {
    this._montoPagar = +value;
  }
}