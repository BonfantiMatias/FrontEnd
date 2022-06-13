import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Habilidades } from './habilidad';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { URL_BACKEND } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  public urlEndPoint: string = URL_BACKEND + '/api/skill';

  public httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    public http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  public agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getSkills(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.urlEndPoint);
  }
  create(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.post<Habilidades>(this.urlEndPoint, habilidades, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  getSkill(id: number): Observable<Habilidades> {
    return this.http.get<Habilidades>(`${this.urlEndPoint}/${id}`, {
      headers: this.agregarAuthorizationHeader(),
    });
  }

  update(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.put<Habilidades>(
      `${this.urlEndPoint}/${habilidades.id}`,
      habilidades,
      { headers: this.agregarAuthorizationHeader() }
    );
  }

  delete(id: number): Observable<Habilidades> {
    return this.http.delete<Habilidades>(`${this.urlEndPoint}/${id}`, {
      headers: this.agregarAuthorizationHeader(),
    });
  }
}
