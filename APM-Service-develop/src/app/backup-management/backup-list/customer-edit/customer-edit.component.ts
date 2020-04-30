import { Component, OnInit } from '@angular/core';

import { customereditProviders } from 'src/app/_services/customer-edit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { customerdetail } from 'src/app/_models/customer-detail.model';
import { customerdetaillistProviders } from 'src/app/_services/customer-detail.provider';
import { CustomerEdit } from 'src/app/_models/customer-edit.model';
import { ROLETYPE } from 'src/app/shared/role-type.dictionary';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ROUTING } from 'src/app/shared/routing';
import { AuthenticationService } from 'src/app/_services';
import{FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
 /* createRequestForm= new FormGroup({

    name: new FormControl(),
    family : new FormControl(),
    mailAdress:new FormControl(),
    telephon:new FormControl(),
    company:new FormControl(),
    adresss:new FormControl(),
    macAdress:new FormControl(),
    hddNumber:new FormControl(),
  
  })*/

  customeredit:CustomerEdit;
  customereditdetail :CustomerEdit[]=[];
  customer:customerdetail;
  customerdetail :customerdetail[]=[];
  CostumerModel: CustomerEdit;
  idcustomer;
  coustumerArray : CustomerEdit[]=[];
  roleId: number;
  ROLETYPE = ROLETYPE;
  
  submitted = false;
  
  createRequestForm = this.fb.group({
    idCostumer:[],
    name: [],
    family : [],
    mailAdress:[],
    telephon:[],
    company:[],
    adresss:[],
    macAdress:[],
    hddNumber:[]
  
   
  });
  
  constructor(private route: ActivatedRoute,
    private api:customerdetaillistProviders ,
    private putcustom:customereditProviders,
    private authApi: AuthenticationService,
    public fb: FormBuilder,
    private toastr: ToastrService, 
    private router: Router  ) { 
      this.roleId = authApi.getroleId();

    }

    get f() {
      return this.createRequestForm.controls;
    }
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
     
      this.getBackupEmployeDetail(params.get('idCostumer'))
    });
  }

 

  getBackupEmployeDetail(value){
   
    this.api.getBackupEmployeDetail(value).subscribe(data => {
      this.coustumerArray=data;
      this.coustumerArray.forEach(item => {
     
     debugger
      this.idcustomer = item.idCostumer;
     })
   
      this.customerdetail = data;
     
    });
  }


  
  setFormValueToModel() {
    this.CostumerModel = new CustomerEdit();
    debugger
    this.CostumerModel.idCostumer = this.createRequestForm.get('idCostumer').value;
    this.CostumerModel.name = this.createRequestForm.get('name').value;
    this.CostumerModel.family = this.createRequestForm.get('family').value;
    this.CostumerModel.mailAdress = this.createRequestForm.get('mailAdress').value;
    this.CostumerModel.telephon = this.createRequestForm.get('telephon').value;
    this.CostumerModel.company = this.createRequestForm.get('company').value;
    this.CostumerModel.adresss = this.createRequestForm.get('adresss').value;
    this.CostumerModel.macAdress = this.createRequestForm.get('macAdress').value;
    this.CostumerModel.hddNumber = this.createRequestForm.get('hddNumber').value;
  
  }


  onClickSubmit() {
   this.setFormValueToModel();
     debugger
    this.putcustom.putCustomerEdit( this.idcustomer,this.CostumerModel).subscribe(data => {
    
        debugger
        this.toastr.success('Talebiniz oluşturulmuştur.', 'Başarılı', {
          timeOut: 3000
          
        });
        this.router.navigateByUrl(ROUTING.REQUEST_CUSTOMEREDIT);
      });
  }

}
