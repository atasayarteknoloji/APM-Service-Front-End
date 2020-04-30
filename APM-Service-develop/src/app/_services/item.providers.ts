import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from '../shared/endpoints';
import { User } from '../_models';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { ItemModel } from '../_models/item.model';
import { RequestItems } from '../_models/assign-request.model';
import { RequestItem } from '../_models/request-item.model';


@Injectable()
export class ItemProviders {
  header: HttpHeaders;
  private currentUserSubject;
  toastr: any;

  constructor(private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService) {
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

  getItemTypesById(value): Observable<ItemModel[]> {
    return this.http.get(endpoints.item.getItemTypesById.path, { headers: this.header, params: { id: value } }).pipe(
      map((data: ItemModel[]) => {
        console.log('item type by id', data);
        return data;
      }), catchError(error => {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        return throwError('getRequestType hata!');
      })
    );
  }

  getItemTypes(): Observable<ItemModel[]> {
    return this.http.get(endpoints.item.getItemTypes.path, { headers: this.header }).pipe(
      map((data: ItemModel[]) => {
        console.log('item', data);
        return data;
      }), catchError(error => {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        return throwError('getRequestType hata!');
      })
    );
  }
  getItemByRequestId(id): Observable<RequestItem[]> {
    return this.http.get(endpoints.requestItems.getItemByRequestId.path, { headers: this.header, params: { id: id } }).pipe(
      map((data: RequestItem[]) => {
        console.log('item', data);
        return data;
      }), catchError(error => {
        return throwError('getItemByRequestId hata!');
      })
    );
  }
  getAllItems(): Observable<ItemModel[]> {
    return this.http.get(endpoints.item.GetAllItems.path, { headers: this.header }).pipe(
      map((data: ItemModel[]) => {
        console.log('item', data);
        return data;
      }), catchError(error => {
        return throwError('GetAllItems hata!');
      })
    );
  }
  getItemsSearch(searchValue) {
    return this.http.get(endpoints.item.getItemsSearch.path, { headers: this.header, params: { searchValue: searchValue } }).pipe(
      map((data: ItemModel[]) => {
        console.log('item', data);
        return data;
      }), catchError(error => {
        return throwError('GetAllItems hata!');
      })
    );
  }
  getItemsPagination(page): Observable<ItemModel[]> {
    return this.http.get(endpoints.item.getItemsPagination.path,
      { headers: this.header, params: { page: page } }).pipe(
        map((data: ItemModel[]) => {
          return data;
        }), catchError(error => {
          return throwError('getEmployeePagination hata!');
        })
      );
  }
}
