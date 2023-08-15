import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Tecnico } from 'src/app/model/tecnico';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
              private snack: MatSnackBar) { }

  findAll(): Observable<Tecnico[]> {
    const url = this.baseUrl + "/services/order/api/tecnicos";
    return this.http.get<Tecnico[]>(url);
  }
}
