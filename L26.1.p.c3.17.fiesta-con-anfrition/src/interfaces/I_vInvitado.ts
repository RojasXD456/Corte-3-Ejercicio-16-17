export interface I_vInvitado {
  get nombre(): string;
  get cedula(): number;
  get edad(): number;
  get consumo(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}