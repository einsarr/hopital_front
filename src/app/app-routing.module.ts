import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './template/login/login.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { MenuComponent } from './template/menu/menu.component';
import { AdminTemplateComponent } from './template/admin-template/admin-template.component';
import { SignupComponent } from './template/signup/signup.component';
import { WelcomeComponent } from './template/dashboard/welcome/welcome.component';
import { ForgetpwdComponent } from './components/forgetpwd/forgetpwd.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EditLitComponent } from './components/lits/edit-lit/edit-lit.component';
import { ServicesComponent } from './components/services/services/services.component';
import { NewLitComponent } from './components/lits/new-lit/new-lit.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { NewSalleComponent } from './components/salles/new-salle/new-salle.component';
import { EditSalleComponent } from './components/salles/edit-salle/edit-salle.component';
import { SallesComponent } from './components/salles/salles/salles.component';
import { LitsComponent } from './components/lits/lits/lits.component';
import { UsersComponent } from './components/users/users/users.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { NewServiceComponent } from './components/services/new-service/new-service.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admintemplate',component:AdminTemplateComponent},
  {path:'signup',component:SignupComponent},
  {path:'lits',component:LitsComponent},
  {path:'newlit',component:NewLitComponent},
  {path:'editlit/:id',component:EditLitComponent},
  {path:'services',component:ServicesComponent},
  {path:'newservice',component:NewServiceComponent},
  {path:'editservice/:id',component:EditServiceComponent},
  {path:'salles',component:SallesComponent},
  {path:'newsalle',component:NewSalleComponent},
  {path:'editsalle/:id',component:EditSalleComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'forgetpwd',component:ForgetpwdComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'users',component:UsersComponent},
  {path:'newuser',component:NewUserComponent},
  {path:'edituser/:id',component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
