import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ItemProviders } from 'src/app/_services/item.providers';
import { ItemModel } from 'src/app/_models/item.model';

interface DialogData {
  popupType: string;
}

@Component({
  selector: 'app-assign-item',
  templateUrl: './assign-item.component.html',
  styleUrls: ['./assign-item.component.scss']
})
export class AssignItemComponent implements OnInit {
  //#region :: VARIABLES
  questionText: string = '';
  quantity: any;
  items: ItemModel[] = [];
  selectedItems: ItemModel[] = [];
  selectItem: ItemModel;
  amount = [];
  searchValues = ' ';
  pageNumber: number = 1;

  //#endregion
  constructor(public dialogRef: MatDialogRef<AssignItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private toastr: ToastrService,
    private api: ItemProviders,
    private renderer: Renderer2) {
    this.getItemsPagination(this.pageNumber - 1);
  }

  ngOnInit() {
  }

  /***
   * Tüm malzemeleri getirir.
   */
  getAllItems() {
    this.api.getAllItems().subscribe(data => {
      this.items = data;
      console.log(this.items)
    });
  }
  /**
   * malzemeleri sayfa sayfa getirir
   * @param page //gösterilecek sayfa numarası
   */
  getItemsPagination(page) {
    this.api.getItemsPagination(page).subscribe(data => {
      this.items = data;
      console.log(this.items)
    })
  }

  /***
   * Seçilen malzemeleri bir array'e atar.
   * @param event: seçilen elementin id'sini yakalamak için kullanıyoruz.
   */
  onCheckboxChange(id) {
    const element = document.getElementById(id + 'amount');
    debugger;
    if (this.amount[id]) {
      this.renderer.setStyle(element, 'border', '1px solid #ebedf2');
      this.items.find(item => item.id === id).amount = this.amount[id];
      let index = this.items.findIndex(item => item.id === id);
      this.selectedItems.push(this.items[index]);
    } else {
      this.renderer.setStyle(element, 'border', '1px solid red');
      this.toastr.error('Lütfen seçim yapmadan önce miktarı giriniz giriniz.', 'HATA', {
        timeOut: 3000
      });
    }
  }

  /***
   * Popup buton actionlarını gerçekleştiriyor..
   * @param event, buton action adı
   */
  clickClosePopup(event) {
    switch (event) {
      case 'close': {
        this.dialogRef.close();
        break;
      }
      case 'save': {
        this.dialogRef.close(this.selectedItems);
        break;
      }
    }

  }
  onKeydown(event) {
    this.searchValues = event.target.value;
    if (this.searchValues.length > 2) {
      console.log(this.searchValues);
      this.getItemsSearch(this.searchValues);
    }
    else {
      this.getAllItems();
    }
  }
  getItemsSearch(value) {
    this.api.getItemsSearch(value).subscribe(data => {
      this.items = data;
    })
  }
  clickPagination(event) {
    switch (event) {
      case 'prev': {
        if (this.pageNumber != 1)
          this.pageNumber = this.pageNumber - 1;
          this.getItemsPagination(this.pageNumber - 1);
        break;
      }
      case 'next': {
        this.pageNumber = this.pageNumber + 1;
        this.getItemsPagination(this.pageNumber - 1);
        break;
      }
    }
  }
}
