export interface User {
  dni: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  fechaNacimiento?: string;
  activo?: boolean;
  direccion?: string;
  ciudad?: string;
  codigo_postal?: string | null;
  ruta_cv?: string | null;
  perfil?: string | null;
}
