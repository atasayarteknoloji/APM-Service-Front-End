export class RequestModel {
   id: number;
  public itemTypeId: number;
  public name: string;
  public subject: string;
  public expRequest: string;
  public requestStatusId?: number;
  public createTime?: Date;
  public createBy?: number;
  public createByName?: number;
  public updateTime?: Date;
  public updateBy?: number;
}
