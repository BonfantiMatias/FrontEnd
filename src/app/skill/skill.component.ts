import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import {  Habilidades } from './habilidad';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  habilidades!: Habilidades[];
  
 
  
  constructor(public SkillService: SkillService, public authservice:AuthService) { 
    
    
  }

  ngOnInit() {
    this.SkillService.getSkills().subscribe(
      habilidades => this.habilidades = habilidades
    );
  }

}
