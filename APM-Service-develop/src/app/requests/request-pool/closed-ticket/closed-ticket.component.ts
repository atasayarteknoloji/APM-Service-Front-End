import { Component, OnInit, Input } from '@angular/core';
import { RequestModel } from 'src/app/_models/request.model';
import { RequestItem } from 'src/app/_models/request-item.model';
import { ActivatedRoute } from '@angular/router';
import { RequestProviders } from 'src/app/_services/request.providers';
import { ItemProviders } from 'src/app/_services/item.providers';
import { ServiceType } from 'src/app/_models/service-type.model';
import { RequestClosing, RequestClosingItems, RequestClosingDetail } from 'src/app/_models/request-closing.model';

@Component({
  selector: 'app-closed-ticket',
  templateUrl: './closed-ticket.component.html',
  styleUrls: ['./closed-ticket.component.scss']
})
export class ClosedTicketComponent implements OnInit {
  title = "Talep Kapatma";
  subtitle = "Tüm talep kapatma süreçlerinizi ilerletebilirsiniz.";
  expClosing = '';
  note1 = '';
  requestId: number;
  serviceType: ServiceType[] = [];
  servType: ServiceType;
  itemsModel: RequestItem[] = [];
  requestClose: RequestClosing[] = [];
  requestCloseModel: RequestClosing;
  requestCloseItem: RequestClosingItems;
  requestCloseItemArray: RequestClosingItems[] = [];


  constructor(private route: ActivatedRoute,
    private api: RequestProviders,
    private itemApi: ItemProviders
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getItemByRequestId(params.get('ticketId'))
    });
    this.getServiceTypes();

  }

  getItemByRequestId(id) {
    this.itemApi.getItemByRequestId(13).subscribe(data => {
      this.itemsModel = data;
    })
  }
  changeServiceTypeEvent(event) {
    this.servType = new ServiceType;
    this.servType = this.findOrderDetailId(event.target.value);
  }

  findOrderDetailId(value) {
    return this.serviceType.find(x => x.name === value);
  }

  setItemDetail() {
    this.itemsModel.forEach(data => {
      this.requestId = data.requestsId;
      this.requestCloseItem = new RequestClosingItems;
      this.requestCloseItem.requestsId = data.requestsId;
      this.requestCloseItem.itemID = data.itemID;
      this.requestCloseItem.deliveredAmount = data.deliveredAmount;
      this.requestCloseItemArray.push(this.requestCloseItem)
    })
    this.requestCloseModel = new RequestClosing;
    this.requestCloseModel.Requests = new RequestClosingDetail;
    this.requestCloseModel.RequestItems = this.requestCloseItemArray;
    this.requestCloseModel.Requests.id = this.requestId;
    this.requestCloseModel.Requests.expClosing = this.expClosing;
    this.requestCloseModel.Requests.note1 = this.note1;
    this.requestCloseModel.Requests.serviceTypeId = this.servType.id;
    console.log(this.requestCloseModel);
    this.requestClose.push(this.requestCloseModel);//BU GEREKLİ DEĞİL GALİBA
    console.log(this.requestClose)
  }
  getServiceTypes() {
    this.api.getServiceTypes().subscribe(data => {
      this.serviceType = data;
    })
  }

  clickCloseRequest() {
    this.setItemDetail();
    this.api.getRequestClosing(this.requestCloseModel).subscribe(data=>{

    })

  }

}
