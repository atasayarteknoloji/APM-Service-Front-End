import { Component, OnInit } from '@angular/core';
import { RequestProviders } from '../../_services/request.providers';
import { RequestModel } from '../../_models/request.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemProviders } from '../../_services/item.providers';
import { ItemModel } from '../../_models/item.model';
import { CompanyProviders } from '../../_services/company.providers';
import { CompanyModel } from '../../_models/company.model';
import { AuthenticationService } from '../../_services';
import { ROLETYPE } from '../../shared/role-type.dictionary';
import { TicketModel } from '../../_models/ticket.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ROUTING } from '../../shared/routing';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {

  requestModel: RequestModel[] = [];
  itemModel: ItemModel[] = [];
  companyModel: CompanyModel[] = [];
  ticketModel: TicketModel;
  title="Yeni Talep";
  subtitle="Talep tipi ve ürünlerinizi seçerek talep oluşturabilirsiniz."
  //user role id
  roleId: number;
  ROLETYPE = ROLETYPE;

  createRequestForm = this.fb.group({
    customerName: [''],
    requestName: ['', Validators.required],
    itemName: ['', Validators.required],
    priority: [''],
    subject: ['', Validators.required],
    description: ['', Validators.required]
  });

  submitted = false;

  constructor(private api: RequestProviders,
    private itemApi: ItemProviders,
    private companyApi: CompanyProviders,
    private authApi: AuthenticationService,
    public fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {
    this.getRequestTypes();
    this.getAllCustomer();
    this.roleId = authApi.getroleId();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.createRequestForm.controls;
  }

  ngOnInit() {
  }

  /**
   * get request type API
   */
  getRequestTypes() {
    this.api.getRequestType().subscribe(data => {
      this.requestModel = data;
    });
  }

  /**
   * when the change request types, call the get item types API
   * @param id: request type id
   */
  changeRequestOption(id) {
    this.getItemTypesById(id);
  }

  /**
   * get item types by request type id
   * @param id: request type id
   */
  getItemTypesById(id) {
    this.itemApi.getItemTypesById(id).subscribe(data => {
      this.itemModel = data;
    });
  }

  /**
   * get all customer from API
   */
  getAllCustomer() {
    this.companyApi.getAllCustomer().subscribe(data => {
      this.companyModel = data;
    });
  }

  /**
   * set form value to ticket model
   */
  setFormValueToModel() {
    this.ticketModel = new TicketModel();
    this.ticketModel.ItemTypeId = this.createRequestForm.get('itemName').value;
    this.ticketModel.Subject = this.createRequestForm.get('subject').value;
    this.ticketModel.ExpRequest = this.createRequestForm.get('description').value;
    if (this.createRequestForm.get('customerName').value !== 0) {
      this.ticketModel.CompanyId = this.createRequestForm.get('customerName').value;
    }
  }

  /**
   * When clicked to submit button, this function worked.
   */
  onClickSubmit() {
    this.submitted = true;

    if (this.createRequestForm.invalid) {
      this.toastr.warning('Tüm alanları eksiksiz giriniz..', 'Uyarı!', {
        timeOut: 3000
      });
      return;
    }

    this.setFormValueToModel();
    this.api.addNewTicket(this.ticketModel)
      .subscribe(data => {
        this.toastr.success('Talebiniz oluşturulmuştur.', 'Başarılı', {
          timeOut: 3000
        });
        this.router.navigateByUrl(ROUTING.REQUEST_LIST);
      });
  }
}
