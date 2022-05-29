import { Component, OnInit } from '@angular/core';
import { Basico } from '../basico';
import { BasicoService } from '../basico.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'detalle2-basico',
  templateUrl: './detalle2.component.html',
  styleUrls: ['./detalle2.component.css']
})
export class Detalle2Component implements OnInit {

  basico!: Basico; 
  titulo: string = "Cambiar Foto"
  private fotoSeleccionada!: File; 
  

  constructor(private BasicoService: BasicoService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id:number = +params.get('id');
      if(id){
        this.BasicoService.getBasico(id)
        .subscribe(basico =>{
          this.basico = basico;
        })
      }
    })
  }
  seleccionarFoto(event:any){
    this.fotoSeleccionada = event.target.files[0]
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0 ){
      Swal.fire('Error seleccionar imagen:', 'El archivo debe ser del tipo imagen', 'error');
      
  }
}
  subirFoto() {
    if(!this.fotoSeleccionada){
      Swal.fire('Error Upload:', 'Debe seleccionar una foto', 'error')
    }
    else {
    this.BasicoService.subirFoto(this.fotoSeleccionada, this.basico.id)
    .subscribe(basico => {
      this.basico = basico;
      Swal.fire('La Foto se ha subido Completamente!', `La Foto se ha subido con exito: ${this.basico.foto}`,'success');
    })}
  }

}

