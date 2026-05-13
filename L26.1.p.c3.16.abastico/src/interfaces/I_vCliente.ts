export interface I_vCliente {
  get nombre(): string;
  get cedula(): number;
  get cantFrutas(): number;
  get cantCarne(): number;
  mostrar(): void;
  ocultar(): void;
  limpiar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}