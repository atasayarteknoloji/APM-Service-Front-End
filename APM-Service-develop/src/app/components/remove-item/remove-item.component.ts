import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { POPUPTYPE } from '../../shared/popup';
import { ToastrService } from 'ngx-toastr';
import { CancelledRequest } from 'src/app/_models/cancelled-request.model';
import { RequestProviders } from 'src/app/_services/request.providers';
interface DialogData {
  id: string;
  popupType: string;
}

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {
  questionText: string = '';
  descArea = '';
  cancelledRequestArray: CancelledRequest[] = [];
  cancelledRequest: CancelledRequest;
  noButton = '';
  yesButton = '';

  constructor(public dialogRef: MatDialogRef<RemoveItemComponent>,
    private api: RequestProviders,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.setQuestions();
    console.log(this.data)
  }
  setQuestions() {
    switch (this.data.popupType) {
      case POPUPTYPE.CANCEL:
        this.questionText = this.data.id + ' nolu talep iptal edilecektir. Lütfen açıklama giriniz:';
        this.yesButton = "KAYDET";
        this.noButton = "KAPAT";
        break;
      case POPUPTYPE.START:
        this.questionText = this.data.id + ' nolu talebi başlatmak istiyor musunuz?';
        this.yesButton = "EVET";
        this.noButton = "HAYIR";
        break;
      case POPUPTYPE.PAUSE:
        this.questionText = this.data.id + ' nolu talebi durdurmak istiyor musunuz?';
        this.yesButton = "EVET";
        this.noButton = "HAYIR";
        break;
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
  onYesClick() {

    switch (this.data.popupType) {
      case POPUPTYPE.CANCEL:
        console.log(this.descArea.length)
        if (this.descArea.length > 20) {
          console.log('iptal edilecek siparis id', this.data);
          this.setDeleteAPI();
          this.dialogRef.close();
        }
        break;
      case POPUPTYPE.START:
        //TODO başlatma servisi çağırılacak
        console.log('başlatılacak talep id', this.data);
        this.getRequestProcess(this.data.id)
        break;
      case POPUPTYPE.PAUSE:
        //TODO durdurma servisi çağırılacak
        console.log('durdurulacak talep id', this.data);
        this.getRequestWaiting(this.data.id)
        break;
    }
  }
  callDeleteAPI(cancReq: CancelledRequest) {
    this.api.updateRequestStatus(cancReq).subscribe(data => {

    })
  }
  setDeleteAPI() {
    this.cancelledRequest = new CancelledRequest();
    this.cancelledRequest.expCancel = this.descArea;
    this.cancelledRequest.Id = this.data.id;
    this.callDeleteAPI(this.cancelledRequest);
  }
  getRequestProcess(id) {
    this.api.getRequestProcess(id).subscribe(data => {
    })
  }
  getRequestWaiting(id) {
    this.api.getRequestWaiting(id).subscribe(data => {
    })
  }
}
