export class RequestClosing {
    RequestItems: RequestClosingItems[];
    Requests: RequestClosingDetail;
}
export class RequestClosingItems {
    requestsId: number;
    itemID: number;
    deliveredAmount: number;
}
export class RequestClosingDetail {
    id: number;
    expClosing: string;
    serviceTypeId: number;
    note1: string;
}