import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
import { ProyectosService } from './proyectos.service';
import { Web } from './web';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  web!: Web[];

  constructor(public proyectosService: ProyectosService, public authservice: AuthService) { }

  ngOnInit(): void {
    this.proyectosService.getWebs().subscribe(
      web => this.web = web);
  }

  delete(web:Web): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas Seguro?',
      text: `Seguro quieres borrar la informacion de ${web.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.proyectosService.delete(web.id).subscribe(
          response => {
            this.web = this.web.filter(bas => bas !== web)
            swalWithBootstrapButtons.fire(
              'Informacion Eliminada!',
              `Informacion de ${web.nombre} eliminada`,
              'success'
            )
          }
        )
        
      } 
    })
  }

}

