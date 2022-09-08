import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'home-header', component:HomeHeaderComponent},
  {path:'users' , component:UsersComponent},
  {path:'clients', component:ClientsComponent},
  {path:'bussiness', component:BussinessComponent},
  {path: '**', redirectTo:'home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
