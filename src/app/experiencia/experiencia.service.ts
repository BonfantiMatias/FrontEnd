import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Trabajos } from './trabajo';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  public urlEndPoint: string = 'http://localhost:8080/api/experiencia';

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

  getTrabajos(): Observable<Trabajos[]> {
    return this.http.get<Trabajos[]>(this.urlEndPoint);
  }
  create(trabajo: Trabajos): Observable<Trabajos> {
    return this.http.post<Trabajos>(this.urlEndPoint, trabajo, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  getTrabajo(id: number): Observable<Trabajos> {
    return this.http.get<Trabajos>(`${this.urlEndPoint}/${id}`, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  update(trabajo: Trabajos): Observable<Trabajos> {
    return this.http.put<Trabajos>(
      `${this.urlEndPoint}/${trabajo.id}`,
      trabajo,
      {
        headers: this.agregarAuthorizationHeader(),
      }
    );
  }

  delete(id: number): Observable<Trabajos> {
    return this.http.delete<Trabajos>(`${this.urlEndPoint}/${id}`, {
      headers: this.agregarAuthorizationHeader(),
    });
  }
}
