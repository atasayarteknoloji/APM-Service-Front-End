import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { RequestProviders } from 'src/app/_services/request.providers';
import { RequestModel } from 'src/app/_models/request.model';
import { ItemProviders } from 'src/app/_services/item.providers';
import { RequestItem } from 'src/app/_models/request-item.model';
import { LogModel } from 'src/app/_models/request-log.model';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  //#region page header params
  title="Talep Detayı";
  subtitle="Talebiniz ile ilgili tüm detayları görüntüleyebilirsiniz."
  //#endregion
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;
  reqDetails: RequestModel;
  itemsModel: RequestItem[] = [];
  requestLog: LogModel[] = [];

  separatorKeysCodes = [ENTER, COMMA];

  userCtrl = new FormControl();

  filteredUsers: Observable<any[]>;

  users = [
    'Yasin Atasayar',
  ];

  allUsers = [
    'Büşra UYAR',
    'Serkan Konakçı',
    'Ertan baylan',
    'Mert Çakır'
  ];

  @ViewChild('userInput') userInput: ElementRef;

  constructor(private route: ActivatedRoute,
    private api: RequestProviders,
    private itemApi: ItemProviders) {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: string | null) => user ? this.filter(user) : this.allUsers.slice()));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getRequestDetailAPI(params.get('ticketId'))
      this.getItemByRequestId(params.get('ticketId'))
      this.getRequestTimeLineById(params.get('ticketId'))
    });

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.users.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.userCtrl.setValue(null);
  }

  remove(user: any): void {
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allUsers.filter(user =>
      user.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.users.push(event.option.viewValue);
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }
  getRequestDetailAPI(id) {
    this.api.getRequestsDetailById(id).subscribe(data => {
      this.reqDetails = data;
    })
  }
  getItemByRequestId(id) {
    this.itemApi.getItemByRequestId(id).subscribe(data => {
      this.itemsModel = data;

    })
  }
  getRequestTimeLineById(id) {
    this.api.getRequestTimeLineById(id).subscribe(data => {
      this.requestLog = data;
    })
  }
}
