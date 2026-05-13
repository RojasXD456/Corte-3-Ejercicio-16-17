export default class Cl_mFiesta {
    invitados = [];
    agregarInvitado(invitado) {
        this.invitados.push(invitado);
    }
    totalConsumo() {
        let total = 0;
        this.invitados.forEach((invitado) => (total += invitado.consumo));
        return total;
    }
    cantidadInvitados() {
        return this.invitados.length;
    }
    promedioEdad() {
        if (this.invitados.length === 0)
            return 0;
        let total = 0;
        this.invitados.forEach((invitado) => (total += invitado.edad));
        return total / this.invitados.length;
    }
}
