import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Cursos } from './cursos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  public urlEndPoint: string = 'http://localhost:8080/api/educacion'

  private HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public http:HttpClient, public authService: AuthService) { }

  public agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.HttpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.HttpHeaders;
  }

  getEdus(): Observable <Cursos[] >{
    return this.http.get<Cursos[]>(this.urlEndPoint); 
   }
   create(cursos : Cursos ) : Observable<Cursos> {
     return this.http.post<Cursos>(this.urlEndPoint, cursos, {headers: this.agregarAuthorizationHeader()} )
   }
 
   getEdu(id: number):Observable<Cursos> {
     return this.http.get<Cursos>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
   }
 
   update(cursos: Cursos): Observable<Cursos>{
     return this.http.put<Cursos>(`${this.urlEndPoint}/${cursos.id}`, cursos, {headers: this.agregarAuthorizationHeader()})
   }
 
   delete(id: number): Observable<Cursos>{
     return this.http.delete<Cursos>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
   }
 
}
