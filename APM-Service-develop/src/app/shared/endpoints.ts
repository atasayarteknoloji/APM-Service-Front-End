/-- END POINTLER TUTULACAK --/;
import { servers } from './configuration';

export const endpoints = {
  users: {
    authenticate: {
      path: servers.real + '/auth/login'
    },
    path: servers.postmanMock + '/users'

  },
  ticket: {
    getNewTicketByCustomer: {
      path: servers.postmanMock + 'getNewTicketByCustomer'
    },
    getInProgressTicketByCustomer: {
      path: servers.postmanMock + 'getInProgressTicketByCustomer'
    },
    getOldTicketByCustomer: {
      path: servers.postmanMock + 'getOldTicketByCustomer'
    }
  },
  request: {
    getRequestType: {
      path: servers.real + '/RequestTypes'
    },
    addTicket: {
      path: servers.real + '/Requests'
    },
    getRequestsByType: {
      path: servers.real + '/Requests/getRequestsByType'
    },
    updateRequestStatus: {
      path: servers.real + '/Requests/updateRequestStatus'
    },
    requestAssignment: {
      path: servers.real + '/Requests/requestAssignment'
    },
    getRequestsDetailById: {
      path: servers.real + '/Requests/getRequestDetailById'
    },
    getMyRequestsCount: {
      path: servers.real + '/requests/getMyRequestsCount'
    },
    getMyWorkPool: {
      path: servers.real + '/requests/getMyWorkPool'
    },
    getMyWork6Month: {
      path: servers.real + '/requests/getMyWork6Month'
    },
    getRequestProcess: {
      path: servers.real + '/requests/requestProcess'
    },
    getRequestWaiting: {
      path: servers.real + '/requests/requestWaiting'
    },
    getRequestClosing: {
      path: servers.real + '/requests/requestClosingAndTransfer'
    }
  },
  item: {
    getItemTypes: {
      path: servers.real + '/itemTypes'
    },
    getItemTypesById: {
      path: servers.real + '/RequestTypes/GetItemById'
    },
    GetAllItems: {
      path: servers.real + '/Items/GetAllItems'
    },
    getItemsSearch: {
      path: servers.real + '/Items/getItemsSearch'
    },
    getItemsPagination: {
      path: servers.real + '/Items/getItemsPagination'
    }
  },
  tickets: {
    addNewTicket: {
      path: servers.real + ''
    }
  },
  employees: {
    getEmployees: {
      path: servers.real + '/Employees'
    },
    getSearch: {
      path: servers.real + '/Employees/getEmployeeByNameorDepartmentPagination'
    },
    getEmployeePagination: {
      path: servers.real + '/Employees/getEmployeesPagination'
    },
    getEmployeeDetailById: {
      path: servers.real + '/Employees/getEmployeeDetailById' //ÇALIŞAN DETAYLARI 
    }
  },
  teams: {
    getTeams: {
      path: servers.real + '/Teams'
    },
    getSearchTeam: {
      path: servers.real + '/Teams/getTeamByTeamName'
    },
    getAllTeams: {
      path: servers.real + '/Teams/getAllTeams'
    }
  },
  company: {
    getCompanies: {
      path: servers.real + '/Companies'
    },
    getAllCustomer: {
      path: servers.real + '/Companies/GetAllCustomer'
    }
  },
  requestItems: {
    getItemByRequestId: {
      path: servers.real + '/RequestItems/getItemByRequestId'
    }
  },
  backup: {
    getBackupEmploye: {
      path: servers.real + '/Costumers'
    }
  },
  backupDetail: {
    getBackupEmployeDetail: {
      path: servers.real + '/key'
    }
  },
  customerEdit: {
    putCustomerEdit: {
      path: servers.real + '/Costumers/updatecustomer'
    }
  },
  RequestLogs: {
    getRequestTimeLineById: {
      path: servers.real + '/RequestLogs/getRequestTimeLineById'
    }
  },
  BankAccountTypes: { //BANKA HESAP TİPLERİ
    getBankAccountTypes: {
      path: servers.real + '/BankAccountTypes'
    },
    getBankAccountTypesById: {
      path: servers.real + '/BankAccountTypes/'
    }
  },
  BloodGroups: { //KAN GRUPLARI
    getBloodGroups: {
      path: servers.real + '/BloodGroups'
    },
    getBloodGroupsById: {
      path: servers.real + '/BloodGroups/'
    }
  },
  CivilStatus: { //MEDENİ HAL
    getCivilStatus: {
      path: servers.real + '/CivilStatus'
    },
    getCivilStatusById: {
      path: servers.real + '/CivilStatus/'
    }
  },
  ComplatedEdications: { //EĞİTİM DURUMU
    getComplatedEdications: {
      path: servers.real + '/ComplatedEdications'
    },
    getComplatedEdicationsById: {
      path: servers.real + '/ComplatedEdications/'
    }
  },
  CorporationBranches: { //FİRMA ŞUBELERİ
    getCorporationBranches: {
      path: servers.real + '/CorporationBranches'
    },
    getCorporationBranchesById: {
      path: servers.real + '/CorporationBranches/'
    }
  },
  Corporations: {
    getCorporations: {
      path: servers.real + '/Corporations'
    },
    getCorporationsById: {
      path: servers.real + '/Corporations/'
    }
  },
  Countries: {
    getCountries: {
      path: servers.real + '/Countries'
    },
    getCountriesById: {
      path: servers.real + '/Countries/'
    }
  },
  DegreOfDisabilities: {
    getDegreOfDisabilities: {
      path: servers.real + '/DegreOfDisabilities'
    },
    getDegreOfDisabilitiesById: {
      path: servers.real + '/DegreOfDisabilities/'
    }
  },
  Departments: {
    getDepartments: {
      path: servers.real + '/Departments'
    },
    getDepartmentsById: {
      path: servers.real + '/Departments/'
    }
  },
  EducationStatus: {
    getEducationStatus: {
      path: servers.real + '/EducationStatus'
    },
    getEducationStatusById: {
      path: servers.real + '/EducationStatus/'
    }
  },
  EmployeeOtherInfoes: {
    getEmployeeOtherInfoes: {
      path: servers.real + '/EmployeeOtherInfoes'
    },
    getEmployeeOtherInfoesById: {
      path: servers.real + '/EmployeeOtherInfoes/'
    }
  },
  GroupPermissions: {
    getGroupPermissions: {
      path: servers.real + '/GroupPermissions'
    },
    getGroupPermissionsById: {
      path: servers.real + '/GroupPermissions/'
    }
  },
  Nationalities: {
    getNationalities: {
      path: servers.real + '/Nationalities'
    }
  },
  NumberOfChildirens: {
    getNumberOfChildirens: {
      path: servers.real + '/NumberOfChildirens'
    }
  },
  Positions: {
    getPositions: {
      path: servers.real + '/Positions'
    }
  },
  Role: {
    getRole: {
      path: servers.real + '/Role'
    }
  },
  Sexualities: {
    getSexualities: {
      path: servers.real + '/Sexualities'
    }
  },
  ServiceTypes: {
    getServiceTypes: {
      path: servers.real + '/ServiceTypes'
    }
  },
  WorkTypes: {
    getWorkTypes: {
      path: servers.real + '/WorkTypes'
    }
  }

};
