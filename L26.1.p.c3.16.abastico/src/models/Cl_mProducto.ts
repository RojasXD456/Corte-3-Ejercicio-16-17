export default class Cl_mProducto {
  private _nombre: string = "";
  private _cantidadDisponible: number = 0;
  private _precio: number = 0;

  constructor({
    nombre,
    cantidadDisponible,
    precio,
  }: {
    nombre: string;
    cantidadDisponible: number;
    precio: number;
  }) {
    this.nombre = nombre;
    this.cantidadDisponible = cantidadDisponible;
    this.precio = precio;
  }

  get nombre(): string {
    return this._nombre;
  }
  set nombre(value: string) {
    this._nombre = value;
  }

  get cantidadDisponible(): number {
    return this._cantidadDisponible;
  }
  set cantidadDisponible(value: number) {
    this._cantidadDisponible = +value;
  }

  get precio(): number {
    return this._precio;
  }
  set precio(value: number) {
    this._precio = +value;
  }

  descontarInventario(cantidad: number): void {
    this._cantidadDisponible -= cantidad;
  }
}