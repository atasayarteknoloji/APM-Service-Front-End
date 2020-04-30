export class AssignRequest {
    requests: SelectedRequest;
    requestItems: RequestItems[] = [];
    requestEmployees: RequestEmployees[] = [];
    requestTeams: RequestTeams[] = [];
}
export class SelectedRequest {
    id: number;
    expAssignment: string;
    plannedStartDate: Date;
    plannedFinishDate: Date;
}
export class RequestItems {
    requestsId: number;
    itemID: number;
    amount: number;
}
export class RequestEmployees {
    requestsId: number;
    employeeId: number;
}
export class RequestTeams {
    requestsId: number;
    teamId: number;
}