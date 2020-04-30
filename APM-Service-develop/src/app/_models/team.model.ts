import { Department } from './employee-detail.model';

export class Team {
   teamCountDTOs: TeamCountDTOs[];
   empList: string[];
}

export class TeamCountDTOs {
   name: string;
   teamId: number;
   c: number;
}
export class AllTeams {
   id: number;
   name: string;
   departmentId?: number;
   department?: Department;
}