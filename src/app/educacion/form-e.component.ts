import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cursos } from './cursos';
import { EducacionService } from './educacion.service';

@Component({
  selector: 'app-form-e',
  templateUrl: './form-e.component.html',
  styleUrls: ['./form-e.component.css']
})
export class FormEComponent implements OnInit {

  public cursos: Cursos = new Cursos()
  public titulo:string = "Modificar Informacion"

  constructor(private educacionService: EducacionService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEducacion()
  }

  cargarEducacion(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params ['id']
      if(id){
        this.educacionService.getEdu(id).subscribe((cursos)=>this.cursos= cursos)
      }
    })
  }

  create(): void {
    console.log(this.cursos);
    this.educacionService.create(this.cursos)
      .subscribe(
        cursos => {
          this.router.navigate(['form3']);
          Swal.fire('Nuevo Curso', `El curso ${cursos.nombre} ha sido cargado con éxito`, 'success');
        }
        
      );
  }

  update():void{
    this.educacionService.update(this.cursos)
    .subscribe( cursos => {
      
      Swal.fire('Informacion Actualizada', ` ${cursos.nombre} actualizado con éxito!`, 'success')
    }

    )
  }

}
