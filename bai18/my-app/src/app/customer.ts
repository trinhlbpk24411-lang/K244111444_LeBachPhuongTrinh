import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICustomerGroup } from './interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _url: string = '/assets/data/customers.json';

  constructor(private _http: HttpClient) { }

  // Lấy dữ liệu danh sách nhóm khách hàng
  getCustomerGroups(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  // Hàm xử lý lỗi
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'Server error'));
  }
}