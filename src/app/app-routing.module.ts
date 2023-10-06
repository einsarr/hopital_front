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
import { AuthGuard } from './guards/auth.guard';
import { ReserverComponent } from './components/reserver/reserver.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { TypelitsComponent } from './components/typelits/typelits/typelits.component';
import { EditTypelitComponent } from './components/typelits/edit-typelit/edit-typelit.component';
import { NewTypelitComponent } from './components/typelits/new-typelit/new-typelit.component';
import { ProfilsComponent } from './components/profils/profils/profils.component';
import { NewProfilComponent } from './components/profils/new-profil/new-profil.component';
import { EditProfilComponent } from './components/profils/edit-profil/edit-profil.component';
import { StructuresComponent } from './components/structures/structures/structures.component';
import { NewStructureComponent } from './components/structures/new-structure/new-structure.component';
import { EditStructureComponent } from './components/structures/edit-structure/edit-structure.component';
import { TypestructuresComponent } from './components/structures/typestructures/typestructures.component';
import { NewTypestructureComponent } from './components/structures/new-typestructure/new-typestructure.component';
import { EditTypestructureComponent } from './components/structures/edit-typestructure/edit-typestructure.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent, canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'admintemplate',component:AdminTemplateComponent, canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent, canActivate:[AuthGuard]},
  {path:'lits',component:LitsComponent, canActivate:[AuthGuard]},
  {path:'newlit',component:NewLitComponent, canActivate:[AuthGuard]},
  {path:'editlit/:id',component:EditLitComponent, canActivate:[AuthGuard]},
  {path:'services',component:ServicesComponent, canActivate:[AuthGuard]},
  {path:'newservice',component:NewServiceComponent, canActivate:[AuthGuard]},
  {path:'editservice/:id',component:EditServiceComponent, canActivate:[AuthGuard]},
  {path:'salles',component:SallesComponent, canActivate:[AuthGuard]},
  {path:'newsalle',component:NewSalleComponent, canActivate:[AuthGuard]},
  {path:'editsalle/:id',component:EditSalleComponent, canActivate:[AuthGuard]},
  {path:'welcome',component:WelcomeComponent, canActivate:[AuthGuard]},
  {path:'forgetpwd',component:ForgetpwdComponent},
  {path:'contacts',component:ContactsComponent, canActivate:[AuthGuard]},
  {path:'users',component:UsersComponent, canActivate:[AuthGuard]},
  {path:'newuser',component:NewUserComponent, canActivate:[AuthGuard]},
  {path:'edituser/:id',component:EditUserComponent, canActivate:[AuthGuard]},
  {path:'reserver/:id',component:ReserverComponent, canActivate:[AuthGuard]},
  {path:'reservations',component:ReservationsComponent, canActivate:[AuthGuard]},
  {path:'editreservation/:id',component:EditReservationComponent, canActivate:[AuthGuard]},
  {path:'typelits',component:TypelitsComponent, canActivate:[AuthGuard]},
  {path:'newtypelit',component:NewTypelitComponent, canActivate:[AuthGuard]},
  {path:'edittypelit/:id',component:EditTypelitComponent, canActivate:[AuthGuard]},
  {path:'profils',component:ProfilsComponent, canActivate:[AuthGuard]},
  {path:'newprofil',component:NewProfilComponent, canActivate:[AuthGuard]},
  {path:'editprofil/:id',component:EditProfilComponent, canActivate:[AuthGuard]},
  {path:'structures',component:StructuresComponent, canActivate:[AuthGuard]},
  {path:'newstructure',component:NewStructureComponent, canActivate:[AuthGuard]},
  {path:'editstructure/:id',component:EditStructureComponent, canActivate:[AuthGuard]},
  {path:'typestructures',component:TypestructuresComponent, canActivate:[AuthGuard]},
  {path:'newtypestructure',component:NewTypestructureComponent, canActivate:[AuthGuard]},
  {path:'edittypestructure/:id',component:EditTypestructureComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
