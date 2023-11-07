export interface Menu {
  id: number;
  ref: string;
  posicion: number;
  titulo: string;
  ruta: string;
  habilitado: boolean;
  protected: boolean;
  isModule: boolean;
  expand?: boolean;
  secciones?: Section[];
  iconname?: string;
}

export interface Section {
  id: number;
  posicion: number;
  titulo: string;
  descripcion: string;
  iconname: string;
  ruta: string;
  habilitado: boolean;
  modulo: string;
  protected: boolean;
}
