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
    this.skillService.create(this.habilidades).subscribe(
      response => {
        this.router.navigate(['/form'])
        Swal.fire('Se ha Modificado',`la informacion de ${this.habilidades.nombre} con exito`, 'success')
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
