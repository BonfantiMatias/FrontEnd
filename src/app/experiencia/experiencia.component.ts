import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
import { Trabajos } from './trabajo';
import { ExperienciaService } from './experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  trabajo!: Trabajos[];

  constructor(
    public authservice: AuthService,
    public ExperienciaService: ExperienciaService
  ) {}

  ngOnInit() {
    this.ExperienciaService.getTrabajos().subscribe(
      (trabajo) => (this.trabajo = trabajo)
    );
  }

  delete(trabajo: Trabajos): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Estas Seguro?',
        text: `Seguro quieres borrar la informacion de ${trabajo.empresa}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.ExperienciaService.delete(trabajo.id).subscribe((response) => {
            this.trabajo = this.trabajo.filter((bas) => bas !== trabajo);
            swalWithBootstrapButtons.fire(
              'Informacion Eliminada!',
              `Informacion de ${trabajo.empresa} eliminada`,
              'success'
            );
          });
        }
      });
  }
}
