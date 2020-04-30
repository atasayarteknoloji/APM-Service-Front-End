export enum ROLETYPE {
  ADMIN = 1,
  CUSTOMER = 2,
  TECH_TEAM_MANAGER = 3,
  SERVICE_TECH_TEAM = 4, // saha teknik ekibi
  OFFICE_TECH_TEAM = 5,
  SOFTWARE_TEAM = 6,
  STORE = 7, // depo
  ACCOUNTING = 8, // muhasebe
  SALES_TEAM = 9
}

export function roleTypeName(roleId: ROLETYPE): string {
  switch (roleId) {
    case ROLETYPE.ADMIN:
      return 'Admin';
      break;
    case ROLETYPE.CUSTOMER:
      return 'Kullanıcı';
      break;
    case ROLETYPE.TECH_TEAM_MANAGER:
      return 'Teknik Ekip Müdürü';
      break;
    case ROLETYPE.SERVICE_TECH_TEAM:
      return 'Saha Teknik Ekip';
      break;
    case ROLETYPE.OFFICE_TECH_TEAM:
      return 'Ofis Teknik Servis';
      break;
    case ROLETYPE.SOFTWARE_TEAM:
      return 'Yazılım Ekibi';
      break;
    case ROLETYPE.STORE:
      return 'Depo Sorumlusu';
      break;
    case ROLETYPE.ACCOUNTING:
      return 'Muhasebe';
      break;
    case ROLETYPE.SALES_TEAM:
      return 'Satış Ekibi';
      break;
  }
}
