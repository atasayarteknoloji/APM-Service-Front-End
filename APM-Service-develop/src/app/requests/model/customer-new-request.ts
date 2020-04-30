export class CustomerNewRequest {
  id: number;
  itemTypeId: number;
  itemTypeName: string;
  subject: string;
  expRequest: string;
  requestStatusId?: number;
  requestStatusName?: string;
  companyName?: string;
  createTime?: Date;
  createBy?: number;
  createByName?: number;
  updateTime?: Date;
  updateBy?: number;
}
