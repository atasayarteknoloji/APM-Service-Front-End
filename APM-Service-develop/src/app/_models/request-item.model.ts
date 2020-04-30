import { RequestModel } from './request.model';
import { ItemModel } from './item.model';

export class RequestItem {
    itemID?: number;
    requestsId?: number;
    requests?: RequestModel;
    item?: ItemModel;
    amount?: number;
    deliveredAmount?: any;
    remainingAmount?: any;
    createTime?: Date;
    createBy?: number;
    updateTime?: Date;
    updateBy?: number;
}