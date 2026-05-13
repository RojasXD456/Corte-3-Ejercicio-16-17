const html = String.raw;
export default class Cl_vFiesta {
    lblTotalConsumo;
    lblCantidadInvitados;
    lblPromedioEdad;
    btNuevoInvitado;
    tbInvitados;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoInvitado = document.getElementById("body_btNuevoInvitado");
        this.lblTotalConsumo = document.getElementById("body_lblTotalConsumo");
        this.lblCantidadInvitados = document.getElementById("body_lblCantidadInvitados");
        this.lblPromedioEdad = document.getElementById("body_lblPromedioEdad");
        this.tbInvitados = document.getElementById("body_invitados");
    }
    onNuevoInvitado(callback) {
        this.btNuevoInvitado.onclick = callback;
    }
    mostrarInvitados({ invitados, totalConsumo, cantidadInvitados, promedioEdad, }) {
        this.tbInvitados.innerHTML = "";
        invitados.forEach((invitado) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${invitado.cedula}</td>
        <td>${invitado.nombre}</td>
        <td>${invitado.edad}</td>
        <td>${invitado.consumo.toFixed(2)}</td>
      `;
            this.tbInvitados.appendChild(tr);
        });
        this.lblCantidadInvitados.innerHTML = cantidadInvitados.toString();
        this.lblTotalConsumo.innerHTML = totalConsumo.toFixed(2);
        this.lblPromedioEdad.innerHTML = promedioEdad.toFixed(2);
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
