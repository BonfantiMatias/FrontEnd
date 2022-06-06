import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
import { Cursos } from './cursos';
import { EducacionService } from './educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  cursos!: Cursos[] ;

  constructor(public educacionService: EducacionService, public authservice:AuthService) { }

  ngOnInit(): void {
    this.educacionService.getEdus().subscribe(
    cursos => this.cursos = cursos);
  }

  delete(cursos: Cursos  ): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas Seguro?',
      text: `Seguro quieres borrar la informacion de ${cursos.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.educacionService.delete(cursos.id).subscribe(
          response => {
            this.cursos = this.cursos.filter(bas => bas !== cursos)
            swalWithBootstrapButtons.fire(
              'Informacion Eliminada!',
              `Informacion de ${cursos.nombre} eliminada`,
              'success'
            )
          }
        )
        
      } 
    })
  }

}
