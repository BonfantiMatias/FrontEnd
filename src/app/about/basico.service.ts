import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { Basico } from './basico';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BasicoService {

  public urlEndPoint: string = 'http://localhost:8080/api/basicos';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router,
    private authService: AuthService) { }

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getBasicos(): Observable <Basico[] >{
    return this.http.get<Basico[]>(this.urlEndPoint); 
  }

  create(basico : Basico ) : Observable<Basico> {
    return this.http.post<Basico>(this.urlEndPoint, basico, {headers: this.agregarAuthorizationHeader()} )
  }

  getBasico(id: any):Observable<Basico> {
    return this.http.get<Basico>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

  update(basico: Basico): Observable<Basico>{
    return this.http.put<Basico>(`${this.urlEndPoint}/${basico.id}`, basico, {headers: this.agregarAuthorizationHeader()})
  }

  delete(id: number): Observable<Basico>{
    return this.http.delete<Basico>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

  subirFoto(archivo: File, id:string ): Observable<Basico> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id)

    let httpHeaders = new HttpHeaders();
    let token = this.authService.token;
    if (token != null) {
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }

    return this.http.post(`${this.urlEndPoint}/upload/`, formData, {headers: httpHeaders}
    ).pipe(
      map((response: any) => response.basico as Basico)
      
    );
  }

}
