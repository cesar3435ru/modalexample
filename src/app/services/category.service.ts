import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public activeCategoriesSubject: Subject<void> = new Subject<void>();
  public archiveCategoriesSubject: Subject<void> = new Subject<void>();


  url: string = 'http://localhost:8000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getActiveCategoriesObservable(): Observable<void> {
    return this.activeCategoriesSubject.asObservable();
  }
  getArchiveCategoriesObservable(): Observable<void> {
    return this.archiveCategoriesSubject.asObservable();
  }

  addCategory(formData: FormData) {
    return this.http.post(this.url + '/api/addcategory', formData);
  }


  listOfActiveCategories() {
    return this.http.get(this.url + '/api/activecategories');
  }

  listOfArchiveCategories() {
    return this.http.get(this.url + '/api/archivecategories');
  }

  archiveCategoryById(id: number) {
    return this.http.delete(this.url + `/api/archivecategory/${id}`);
  }

  activeCategoryById(id: number) {
    return this.http.delete(this.url + `/api/activecategory/${id}`);
  }



}
