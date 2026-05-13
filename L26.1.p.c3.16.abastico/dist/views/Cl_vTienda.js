const html = String.raw;
export default class Cl_vTienda {
    lblTotalCobrado;
    lblCantidadClientes;
    lblFrutasDisponible;
    lblCarneDisponible;
    btNuevoCliente;
    tbClientes;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoCliente = document.getElementById("body_btNuevoCliente");
        this.lblTotalCobrado = document.getElementById("body_lblTotalCobrado");
        this.lblCantidadClientes = document.getElementById("body_lblCantidadClientes");
        this.lblFrutasDisponible = document.getElementById("body_lblFrutasDisponible");
        this.lblCarneDisponible = document.getElementById("body_lblCarneDisponible");
        this.tbClientes = document.getElementById("body_clientes");
    }
    onNuevoCliente(callback) {
        this.btNuevoCliente.onclick = callback;
    }
    mostrarClientes({ clientes, totalCobrado, cantidadClientes, frutas, carne, }) {
        this.tbClientes.innerHTML = "";
        clientes.forEach((cliente) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${cliente.cedula}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.cantFrutas}</td>
        <td>${cliente.cantCarne}</td>
        <td>${cliente.montoPagar.toFixed(2)}</td>
      `;
            this.tbClientes.appendChild(tr);
        });
        this.lblCantidadClientes.innerHTML = cantidadClientes.toString();
        this.lblTotalCobrado.innerHTML = totalCobrado.toFixed(2);
        this.lblFrutasDisponible.innerHTML = frutas.cantidadDisponible.toString();
        this.lblCarneDisponible.innerHTML = carne.cantidadDisponible.toString();
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
