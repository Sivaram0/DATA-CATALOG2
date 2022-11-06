import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './BussinessData/bussiness/bussiness.component';
import { ClientsComponent } from './BussinessData/clients/clients.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './BussinessData/users/users.component';
import { RegisterationComponent } from './Exam/registeration/registeration.component';
import { SampleQPaperComponent } from './Exam/sample-q-paper/sample-q-paper.component';
import { ResultsComponent } from './Exam/results/results.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  { path:'practice', component:PracticeComponent},
  {path:'bussiness', component:BussinessComponent,
    children: [
    {path:'clients', component:ClientsComponent},
    {path:'users', component:UsersComponent}
    ]
  },
  {path:'registeration', component:RegisterationComponent,
     children: [
      { path:'sample-q-paper', component:SampleQPaperComponent,
      children:[
        {path:'results', component:ResultsComponent}
      ]
    }
    ]
  },
  { path:'registeration', component:RegisterationComponent},
  {path: '**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
