import { Component, OnInit } from '@angular/core';
import { Basico } from '../about/basico';
import { BasicoService } from '../about/basico.service';
import { URL_BACKEND } from '../config/config';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
})
export class PortadaComponent implements OnInit {
  basico!: Basico[];
  urlBackend: string = URL_BACKEND;

  constructor(
    public basicoService: BasicoService,
    public authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.basicoService
      .getBasicos()
      .subscribe((basico) => (this.basico = basico));
  }
}
