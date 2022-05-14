import { Component, OnInit } from '@angular/core';
import { Basico } from '../about/basico';
import { BasicoService } from '../about/basico.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  basico!: Basico[];

  constructor(private basicoService: BasicoService) { }

  ngOnInit(): void {
    this.basicoService.getBasicos().subscribe(
      basico => this.basico = basico
    );
  }

}
