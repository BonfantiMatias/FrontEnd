import { Injectable } from '@angular/core';
import { Basico } from './basico';
import { BASICOS } from './basico.json';

@Injectable({
  providedIn: 'root'
})
export class BasicoService {

  constructor() { }

  getBasicos(): Basico {
    return BASICOS
  }

}
