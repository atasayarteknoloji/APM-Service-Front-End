import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from '../shared/endpoints';
import { User } from '../_models';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { CompanyModel } from '../_models/company.model';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../_models/employee.model';
import { Backupcostumer } from '../_models/backup.model';
import { customerdetail } from '../_models/customer-detail.model';
import { CustomerEdit } from '../_models/customer-edit.model';


@Injectable()
export class customereditProviders {
    [x: string]: any;
    header: HttpHeaders;
    private currentUserSubject;

    constructor(private http: HttpClient,
        private router: Router,
        private authenticationService: AuthenticationService,
        private toastr: ToastrService) {
        this.setHeader();
    }

    setHeader() {
        this.currentUserSubject = (JSON.parse(localStorage.getItem('currentUser')));
        this.header = new HttpHeaders()
            .set('Authorization', `Bearer ${(this.currentUserSubject.token)}`)
            .set('Content-Type', 'application/json');
    }
   
   

   
    
    putCustomerEdit(idCostumer,ticket:CustomerEdit): Observable<CustomerEdit> {
       debugger
        return this.http.put<CustomerEdit>(endpoints.customerEdit.putCustomerEdit.path, ticket,
          { headers: this.header , params :{idCostumer: idCostumer}})
          .pipe(
            catchError(error => {
              this.toastr.error('Talep oluşturma işleminiz gerçekleştirilemedi. Lütfen tekrar deneyiniz.', 'Hata!', {
                timeOut: 3000
              });
              return throwError('addNewTicket hata!');
            })
          );
      }

     
    

}
