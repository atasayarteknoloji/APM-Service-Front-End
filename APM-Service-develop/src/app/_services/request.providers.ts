import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { RequestModel } from '../_models/request.model';
import { endpoints } from '../shared/endpoints';
import { User } from '../_models';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { TicketModel } from '../_models/ticket.model';
import { ToastrService } from 'ngx-toastr';
import { CancelledRequest } from '../_models/cancelled-request.model';
import { AssignRequest } from '../_models/assign-request.model';
import { LogModel } from '../_models/request-log.model';
import { SupportTicket } from '../_models/support-ticket.model';
import { SixMonth } from '../_models/six-month.model';
import { ServiceType } from '../_models/service-type.model';
import { RequestClosing } from '../_models/request-closing.model';


@Injectable()
export class RequestProviders {
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
    if (this.currentUserSubject) {
      this.header = new HttpHeaders()
        .set('Authorization', `Bearer ${(this.currentUserSubject.token)}`)
        .set('Content-Type', 'application/json');
    }

  }


  getRequestType(): Observable<RequestModel[]> {
    return this.http.get(endpoints.request.getRequestType.path, { headers: this.header }).pipe(
      map((data: RequestModel[]) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestType hata!');
      })
    );
  }

  addNewTicket(ticket: TicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(endpoints.request.addTicket.path, ticket, { headers: this.header })
      .pipe(
        catchError(error => {
          this.toastr.error('Talep oluşturma işleminiz gerçekleştirilemedi. Lütfen tekrar deneyiniz.', 'Hata!', {
            timeOut: 3000
          });
          return throwError('addNewTicket hata!');
        })
      );
  }
  getRequestsByType(id): Observable<RequestModel[]> {
    return this.http.get(endpoints.request.getRequestsByType.path, { headers: this.header, params: { id: id } }).pipe(
      map((data: RequestModel[]) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestsByType hata!');
      })
    );
  }
  updateRequestStatus(cancelledRequest: CancelledRequest): Observable<CancelledRequest> {
    return this.http.post<CancelledRequest>(endpoints.request.updateRequestStatus.path,
      cancelledRequest, { headers: this.header }).pipe(
        map((data: CancelledRequest) => {
          return data;
        }), catchError(error => {
          this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
            timeOut: 3000
          });
          return throwError('getRequestsByType hata!');
        })
      );
  }
  requestAssignment(assingReq: AssignRequest): Observable<AssignRequest> {
    return this.http.post<AssignRequest>(endpoints.request.updateRequestStatus.path,
      assingReq, { headers: this.header }).pipe(
        map((data: AssignRequest) => {
          return data;
        }), catchError(error => {
          this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
            timeOut: 3000
          });
          return throwError('getRequestsByType hata!');
        })
      );
  }
  getRequestsDetailById(id): Observable<RequestModel> {
    return this.http.get(endpoints.request.getRequestsDetailById.path, { headers: this.header, params: { id: id } }).pipe(
      map((data: RequestModel) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestsByType hata!');
      })
    );
  }
  getRequestTimeLineById(id): Observable<LogModel[]> {
    return this.http.get(endpoints.RequestLogs.getRequestTimeLineById.path, { headers: this.header, params: { id: id } }).pipe(
      map((data: LogModel[]) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestTimeLineById hata!');
      })
    );
  }
  getMyRequestsCount() {
    return this.http.get(endpoints.request.getMyRequestsCount.path, { headers: this.header }).pipe(
      map((data) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getMyRequestsCount hata!');
      })
    );

  }
  getMyWorkPool(param): Observable<SupportTicket[]> {
    return this.http.get(endpoints.request.getMyWorkPool.path, { headers: this.header, params: { prm: param, typeId: "2" } }).pipe(
      map((data: SupportTicket[]) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getMyWorkPool hata!');
      })
    );
  }
  getMyWork6Month(): Observable<SixMonth[]> {
    return this.http.get(endpoints.request.getMyWork6Month.path, { headers: this.header }).pipe(
      map((data: SixMonth[]) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getMyWork6Month hata!');
      })
    );
  }
  getRequestProcess(id): Observable<any> {
    return this.http.post<any>(endpoints.request.getRequestProcess.path, id, { headers: this.header }).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        debugger;
        this.toastr.error(error, 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestProcess hata!');
      })
    );
  }
  getRequestWaiting(id) {
    return this.http.post<any>(endpoints.request.getRequestWaiting.path, id, { headers: this.header }).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestWaiting hata!');
      })
    );
  }
  getRequestClosing(requestClose: RequestClosing): Observable<RequestClosing> {
    return this.http.post<RequestClosing>(endpoints.request.getRequestClosing.path, requestClose, { headers: this.header }).pipe(
      map((data: RequestClosing) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getRequestClosing hata!');
      })
    );
  }
  getServiceTypes(): Observable<ServiceType[]> {
    return this.http.get(endpoints.ServiceTypes.getServiceTypes.path, { headers: this.header }).pipe(
      map((data: ServiceType[]) => {
        return data;
      }), catchError(error => {
        this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
          timeOut: 3000
        });
        return throwError('getServiceTypes hata!');
      })
    );
  }
}
