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
import { FormComponent } from './about/form.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
    AboutComponent,
    SkillComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
