import Cl_mTienda from "../models/Cl_mTienda.js";
export default class Cl_cTienda {
    mTienda = new Cl_mTienda();
    vTienda;
    cCliente;
    constructor(vistaTienda, controladorCliente) {
        this.vTienda = vistaTienda;
        this.cCliente = controladorCliente;
        this.vTienda.onNuevoCliente(() => this.procesar1Cliente());
    }
    procesar1Cliente() {
        this.cCliente.solicitarCliente((cliente) => {
            if (cliente !== null) {
                this.mTienda.agregarCliente(cliente);
                this.vTienda.mostrarClientes({
                    clientes: this.mTienda.clientes,
                    totalCobrado: this.mTienda.totalCobrado,
                    cantidadClientes: this.mTienda.cantidadClientes(),
                    frutas: this.mTienda.frutas,
                    carne: this.mTienda.carne,
                });
            }
        });
    }
}
