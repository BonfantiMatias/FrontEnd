import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Web } from './web';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  public urlEndPoint: string = 'http://localhost:8080/api/proyectos'

  private HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public http:HttpClient, public authService: AuthService) { }
  public agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.HttpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.HttpHeaders;
  }

  getWebs(): Observable <Web[] >{
    return this.http.get<Web[]>(this.urlEndPoint); 
   }
   create(web : Web ) : Observable<Web> {
     return this.http.post<Web>(this.urlEndPoint, web, {headers: this.agregarAuthorizationHeader()} )
   }
 
   getWeb(id: number):Observable<Web> {
     return this.http.get<Web>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
   }
 
   update(web: Web): Observable<Web>{
     return this.http.put<Web>(`${this.urlEndPoint}/${web.id}`, web, {headers: this.agregarAuthorizationHeader()})
   }
 
   delete(id: number): Observable<Web>{
     return this.http.delete<Web>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
   }
}
