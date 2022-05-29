import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
import { Basico } from './basico';
import { BasicoService } from './basico.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  basico!: Basico[];

  constructor(public basicoService: BasicoService, public authservice:AuthService) { }

  ngOnInit(): void {
    this.basicoService.getBasicos().subscribe(
      basico => this.basico = basico
    );
  }
    delete(basico: Basico): void{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas Seguro?',
        text: `Seguro quieres borrar la informacion de ${basico.nombre}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.basicoService.delete(basico.id).subscribe(
            response => {
              this.basico = this.basico.filter(bas => bas !== basico)
              swalWithBootstrapButtons.fire(
                'Informacion Eliminada!',
                `Informacion de ${basico.nombre} eliminada`,
                'success'
              )
            }
          )
          
        } 
      })
    }
}
 