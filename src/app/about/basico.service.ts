import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Basico } from './basico';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BasicoService {

  private urlEndPoint: string = 'http://localhost:8080/api/basicos'

  constructor(private http:HttpClient) { }

  getBasicos(): Observable <Basico[] >{
    return this.http.get<Basico[]>(this.urlEndPoint); 
  }

}
