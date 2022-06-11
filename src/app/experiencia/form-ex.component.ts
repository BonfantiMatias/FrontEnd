import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExperienciaService } from './experiencia.service';
import { Trabajos } from './trabajo';

@Component({
  selector: 'app-form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.css'],
})
export class FormExComponent implements OnInit {
  public trabajo: Trabajos = new Trabajos();
  public titulo: String = 'Modificar Informacion';

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarTrabajos();
  }

  cargarTrabajos(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.experienciaService
          .getTrabajo(id)
          .subscribe((trabajo) => (this.trabajo = trabajo));
      }
    });
  }

  create(): void {
    console.log(this.trabajo);
    this.experienciaService.create(this.trabajo).subscribe((trabajo) => {
      this.router.navigate(['form5']);
      Swal.fire(
        'Nueva Experiencia',
        `Su informacion en  ${trabajo.empresa} ha sido agregada con exito`,
        'success'
      );
    });
  }

  update(): void {
    this.experienciaService.update(this.trabajo).subscribe((trabajo) => {
      Swal.fire(
        'Informacion Actualizada',
        `${trabajo.empresa} actualizada con exito!`,
        'success'
      );
    });
  }
}
