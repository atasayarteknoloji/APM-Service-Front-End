import { AllTeams } from './team.model';

export class EmployeeDetail {
    id: number;
    active: number;
    employeeOtherInfoId?: number;
    employeeOtherInfo?: EmployeeOtherInfo;
    positionId?: number;
    position?: Position[];
    teamId?: number;
    team?: AllTeams;
    departmentId?: number;
    department?: Department;
    roleId?: number;
    role?: RoleModel;
    civilStatusId?: number;
    civilStatus?: CivilStatus[];
    sexualityId?: number;
    sexuality?: Sexualities[];
    nationalityId?: number;
    nationality?: Nationalities[];
    bloodGroupId?: number;
    bloodGroup?: BloodGroups[];
    complatedEducationId?: number;
    complatedEducation?: ComplatedEdications[];
    degreOfDisabilityId?: number;
    degreOfDisability?: DegreOfDisabilities[];
    numberOfChildrenId?: number;
    numberOfChildren?: NumberOfChildirens[];
    countryId?: number;
    country?: Countries[];
    createTime?: Date;
    createBy?: number;
    updateTime?: Date;
    updateBy?: number;
}
export class EmployeeOtherInfo {
    id: number;
    firstName: string;
    lastName: string;
    beginDate?: Date;
    outDate?: Date;
    dateOfBirth?: Date;
    identificationNo?: any;
    lastCompletedEducationInstution?: any;
    address?: any;
    address2?: any;
    employeeHouseNumber?: any;
    city?: any;
    postCode?: any;
    bankName?: any;
    bankAccountTypeId?: number;
    bankAccountType?: any; //model classı oluşturulabilir DİKKAT!
    bankAccountNo?: any;
    bankAccountIBAN?: any;
    personToCallInCaseOfEmergency?: any;
    emergencyPersonOfProximity?: any;
    emergencyPersonPhone?: any;
    linkName?: any;
    linkAddres?: any;
    src?: string;
    personelEmail?: string;
    bussinesEmail?: string;
    degreOfDisabilityId?: number;
    degreOfDisability?: DegreOfDisabilities[];
    numberOfChildrenId?: number;
    numberOfChildren?: NumberOfChildirens[];
    countryId?: number;
    country?: Countries[];
    createTime?: Date;
    createBy?: number;
    updateTime?: Date;
    updateBy?: number;
}
export class Department {
    id: number;
    departmentName: string;
    createTime?: Date;
    createBy?: number;
    updateTime?: Date;
    updateBy?: number;
}
export class RoleModel {
    id: number;
    name: string;
    departmentId: number;
    department: Department;

}
export class Sexualities {
    id: number;
    sexualityName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class CivilStatus {
    id: number;
    civilStatusName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class Position {
    id: number;
    corporationBrachId: number;
    corporationBranch: any; //model classi gelecek DİKKAT
    titleId: number;
    title: any; //model classi gelecek DİKKAT
    workTypeId: number;
    workType: any; //Model classı gelecek DİKKAT
    employeManagerId: number;
    employee: any; //Model classı gelecek DİKKAT
    positionBeginDate: Date;
    positionOutDate: Date;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class Nationalities {
    id: number;
    nationaltyName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class BloodGroups {
    id: number;
    bloodGroupName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class ComplatedEdications {
    id: number;
    complatedEdicationName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class DegreOfDisabilities {
    id: number;
    dEgreOfDisabilityName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class NumberOfChildirens {
    id: number;
    number: number;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class Countries {
    id: number;
    countryName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class EducationStatus {
    id: number;
    educationStatusName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}
export class WorkType {
    id: number;
    workTypeName: string;
    createTime: Date;
    createBy: number;
    updateTime: Date;
    updateBy: number;
}