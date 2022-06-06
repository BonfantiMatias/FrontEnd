import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

import { Basico } from './basico';
import { BasicoService } from './basico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
  
})
export class FormComponent implements OnInit {

  public basico: Basico = new Basico()
  public titulo:string = "Modificar Informacion"
 


  constructor(private BasicoService: BasicoService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarBasico()
  }

  cargarBasico(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params ['id']
      if(id){
        this.BasicoService.getBasico(id).subscribe((basico)=>this.basico= basico)
      }
    })
  }

  create(): void {
    console.log(this.basico);
    this.BasicoService.create(this.basico)
      .subscribe(
        basico => {
          this.router.navigate(['/clientes']);
          Swal.fire('Nuevo cliente', `El cliente ${basico.nombre} ha sido creado con éxito`, 'success');
        }
        
      );
  }
  
  update():void{
    this.BasicoService.update(this.basico)
    .subscribe( basico => {
      
      Swal.fire('Informacion Actualizada', ` ${basico.nombre} actualizado con éxito!`, 'success')
    }

    )
  }
 

}

