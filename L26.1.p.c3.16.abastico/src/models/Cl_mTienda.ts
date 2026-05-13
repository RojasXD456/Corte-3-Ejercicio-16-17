import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mProducto from "./Cl_mProducto.js";

export default class Cl_mTienda {
  public clientes: Cl_mCliente[] = [];
  public frutas: Cl_mProducto;
  public carne: Cl_mProducto;
  public totalCobrado: number = 0;

  constructor() {
    this.frutas = new Cl_mProducto({
      nombre: "Frutas",
      cantidadDisponible: 20,
      precio: 2,
    });
    this.carne = new Cl_mProducto({
      nombre: "Carne",
      cantidadDisponible: 10,
      precio: 5,
    });
  }

  agregarCliente(cliente: Cl_mCliente): void {
    // Calcular monto a pagar
    const montoFrutas = cliente.cantFrutas * this.frutas.precio;
    const montoCarne = cliente.cantCarne * this.carne.precio;
    cliente.montoPagar = montoFrutas + montoCarne;

    // Descontar inventario
    this.frutas.descontarInventario(cliente.cantFrutas);
    this.carne.descontarInventario(cliente.cantCarne);

    // Acumular total cobrado
    this.totalCobrado += cliente.montoPagar;

    // Agregar a la lista de clientes
    this.clientes.push(cliente);
  }

  cantidadClientes(): number {
    return this.clientes.length;
  }
}