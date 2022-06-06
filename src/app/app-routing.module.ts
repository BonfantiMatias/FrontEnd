import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './about/form.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';


import { Detalle2Component } from './about/detalle2/detalle2.component';
import { FormSComponent } from './skill/form-s.component';
import { FormEComponent } from './educacion/form-e.component';
import { FormPComponent } from './proyectos/form-p.component';

const routes: Routes = [
  
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home' , component: HomeComponent },
  {path: 'login' ,component: LoginComponent},
  {path: 'form' ,component: FormComponent},
  {path: 'form2' ,component: FormSComponent},
  {path: 'form3' ,component: FormEComponent},
  {path: 'form4' ,component: FormPComponent},
  {path: 'form/:id' ,component: FormComponent},
  {path: 'form2/:id' ,component: FormSComponent},
  {path: 'form3/:id' ,component: FormEComponent},
  {path: 'form4/:id' ,component: FormPComponent},
  {path: 'ver/:id' ,component: Detalle2Component},
  {path: '**' , component: P404Component },
  
  


    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
