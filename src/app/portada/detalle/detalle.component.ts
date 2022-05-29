import { Component, OnInit } from '@angular/core';
import { Basico } from '../../about/basico';
import { BasicoService } from '../../about/basico.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'detalle-basico',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  basico!: Basico; 
  titulo: string = "Cambiar Foto"
  private fotoSeleccionada!: File; 
  

  constructor(private BasicoService: BasicoService, 
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get("id");
      if(id){
        this.BasicoService.getBasico(id).subscribe(basico =>{
          this.basico = basico;
        })
      }
    })
  }
  seleccionarFoto(event:any){
    this.seleccionarFoto = event.target.files[0]
    console.log(this.fotoSeleccionada);
  }

  subirFoto(){
    this.BasicoService.subirFoto(this.fotoSeleccionada, this.basico.id)
    .subscribe(basico => {
      this.basico = basico;
      Swal.fire('La Foto se ha subido Completamente!', `La Foto se ha subudo con exito: ${this.basico.foto}`,'success');
    })
  }
}
