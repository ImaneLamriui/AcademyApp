import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MateriaComponent } from './materia/materia.component';
import { DetallesMateriaComponent } from './detalles-materia/detalles-materia.component';
import { ServiciosAcademiaService } from './servicios-academia.service';
import { moduloService } from './modulo.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { loginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Guardian } from './login/guardian';




const appRoutes:Routes=[
  
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component: ProyectosComponentComponent, canActivate:[Guardian]},
  {path:'quienesSomos', component: QuienesComponentComponent},
  {path:'contacto', component: ContactoComponentComponent, canActivate:[Guardian]},
  {path:'update/:id', component: UpdateComponentComponent},
  {path:'login', component: LoginComponent},
  //Crear un apágina de error personalizada, tiene que estar siempre al último
  {path:'**',component: ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    DetallesMateriaComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    UpdateComponentComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
   
  ],
  
  providers: [ServiciosAcademiaService, moduloService, DataServices, loginService, CookieService, Guardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
