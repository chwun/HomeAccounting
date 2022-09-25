import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AccountingCategoryDto } from '../models/accounting-category-dto';
import { AccountingCategoryTreeDto } from '../models/accounting-category-tree-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountingCategoriesService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient) {
    this.apiUrl += 'accounting/';
  }

  getCategories(): Observable<AccountingCategoryDto[]> {
    const url = this.apiUrl + 'categories';
    return this.http.get<AccountingCategoryDto[]>(url);
  }

  getCategoriesAsTree(): Observable<AccountingCategoryTreeDto[]> {
    const url = this.apiUrl + 'categories';

    const httpParams = new HttpParams().set('asTree', true);
    return this.http.get<AccountingCategoryTreeDto[]>(url, { params: httpParams });
  }
}
