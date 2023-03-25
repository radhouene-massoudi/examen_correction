import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { departement } from './model/departement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  addDep(data: departement):Observable<departement> {
    return this.http.post<departement>('http://localhost:3000/departement', data);
  }
  listDep():Observable<departement[]> {
    return this.http.get<departement[]>('http://localhost:3000/departement');
  }
  updateDep(data: any, id:any) {
    return this.http.put('http://localhost:3000/departement/'+id, data);
  }
}
