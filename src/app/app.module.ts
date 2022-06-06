import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortadaComponent } from './portada/portada.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { SkillComponent } from './skill/skill.component';
import { FormComponent } from './about/form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';

import { DetalleComponent } from './portada/detalle/detalle.component';
import { Detalle2Component } from './about/detalle2/detalle2.component';
import { FormSComponent } from './skill/form-s.component';
import { SkillService } from './skill/skill.service';
import { EducacionComponent } from './educacion/educacion.component';
import { FormEComponent } from './educacion/form-e.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormPComponent } from './proyectos/form-p.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
    AboutComponent,
    SkillComponent,
    FormComponent,
    LoginComponent,
    HomeComponent,
    P404Component,
    DetalleComponent,
    Detalle2Component,
    FormSComponent,
    EducacionComponent,
    FormEComponent,
    ProyectosComponent,
    FormPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
