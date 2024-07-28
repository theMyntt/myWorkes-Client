export enum EEmployeer {
  employeer = 0,
  client = 1,
  admin = 2,
  outsourced = 3,
}

export const EEmployeerNames: { [key in EEmployeer]: string } = {
  [EEmployeer.employeer]: 'Funcionário',
  [EEmployeer.client]: 'Cliente',
  [EEmployeer.admin]: 'Administrador',
  [EEmployeer.outsourced]: 'Terceirizado',
};
