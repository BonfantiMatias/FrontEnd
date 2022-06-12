import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProyectosService } from './proyectos.service';
import { Web } from './web';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.component.html',
  styleUrls: ['./form-p.component.css'],
})
export class FormPComponent implements OnInit {
  public web: Web = new Web();
  public titulo: String = 'Modificar Informacion';

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.proyectosService.getWeb(id).subscribe((web) => (this.web = web));
      }
    });
  }

  create(): void {
    console.log(this.web);
    this.proyectosService.create(this.web).subscribe((web) => {
      this.router.navigate(['form4']);
      Swal.fire(
        'Nuevo Proyecto',
        `El proyecto ${web.nombre} ha sido agregado con exito`,
        'success'
      );
    });
  }

  update(): void {
    this.proyectosService.update(this.web).subscribe((web) => {
      Swal.fire(
        'Informacion Actualizada',
        `${web.nombre} actualizada con exito!`,
        'success'
      );
    });
  }
}
