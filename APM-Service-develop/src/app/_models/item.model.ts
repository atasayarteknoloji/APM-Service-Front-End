import { RequestModel } from './request.model';

export class ItemModel {
  public id: number;
  public requestTypeId?: number;
  public requestType?: RequestModel;
  public name: string;
  public amount?: number;
  public createTime?: Date;
  public createBy?: number;
  public updateTime?: Date;
  public UpdateBy?: number;
}
