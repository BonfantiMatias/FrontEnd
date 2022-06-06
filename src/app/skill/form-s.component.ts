import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Habilidades } from './habilidad';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-form-s',
  templateUrl: './form-s.component.html',
  styleUrls: ['./form-s.component.css']
})
export class FormSComponent implements OnInit {

  public habilidades: Habilidades = new Habilidades()
  public titulo:string = "Modificar Informacion"
 


  constructor(private skillService: SkillService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarSkill()
  }

  cargarSkill(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params ['id']
      if(id){
        this.skillService.getSkill(id).subscribe((habilidades)=>this.habilidades= habilidades)
      }
    })
  }

  create(): void {
    console.log(this.habilidades);
    this.skillService.create(this.habilidades)
      .subscribe(
        habilidades => {
          this.router.navigate(['form2']);
          Swal.fire('Nueva Habilidad', `Has aprendido ${habilidades.nombre} con éxito`, 'success');
        }
        
      );
  }
  
  update():void{
    this.skillService.update(this.habilidades)
    .subscribe( habilidades => {
      
      Swal.fire('Informacion Actualizada', ` ${habilidades.nombre} actualizado con éxito!`, 'success')
    }

    )
  }
 

}
