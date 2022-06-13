import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { AuthService } from '../login/auth.service';
import { Web } from './web';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  public urlEndPoint: string = URL_BACKEND + '/api/proyectos';

  public httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    public http: HttpClient,
    public router: Router,
    public authService: AuthService
  ) {}

  public agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getWebs(): Observable<Web[]> {
    return this.http.get<Web[]>(this.urlEndPoint);
  }
  create(web: Web): Observable<Web> {
    return this.http.post<Web>(this.urlEndPoint, web, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  getWeb(id: number): Observable<Web> {
    return this.http.get<Web>(`${this.urlEndPoint}/${id}`, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  update(web: Web): Observable<Web> {
    return this.http.put<Web>(`${this.urlEndPoint}/${web.id}`, web, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  delete(id: number): Observable<Web> {
    return this.http.delete<Web>(`${this.urlEndPoint}/${id}`, {
      headers: this.agregarAuthorizationHeader(),
    });
  }
}
