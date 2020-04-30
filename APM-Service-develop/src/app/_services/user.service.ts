import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../app/_models';
import {endpoints} from '../shared/endpoints';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(endpoints.users.path);
  }

  getById(id: number) {
    return this.http.get<User>(endpoints.users.path, {
      params: {
        id: id.toString()
      }
    });
  }
}
