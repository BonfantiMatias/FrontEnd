import { Component, OnInit } from '@angular/core';
import { Basico } from './basico';
import { BasicoService } from './basico.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  basico!: Basico[];

  constructor(private basicoService: BasicoService) { }

  ngOnInit(): void {
    this.basicoService.getBasicos().subscribe(
      basico => this.basico = basico
    );
  }

}
 