import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './template/login/login.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { AdminTemplateComponent } from './template/admin-template/admin-template.component';
import { MenuComponent } from './template/menu/menu.component';
import { SignupComponent } from './template/signup/signup.component';
import { WelcomeComponent } from './template/dashboard/welcome/welcome.component';
import { ServicesComponent } from './components/services/services/services.component';
import { NewLitComponent } from './components/lits/new-lit/new-lit.component';
import { EditLitComponent } from './components/lits/edit-lit/edit-lit.component';
import { SallesComponent } from './components/salles/salles/salles.component';
import { NewSalleComponent } from './components/salles/new-salle/new-salle.component';
import { EditSalleComponent } from './components/salles/edit-salle/edit-salle.component';
import { NewServiceComponent } from './components/services/new-service/new-service.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { ForgetpwdComponent } from './components/forgetpwd/forgetpwd.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UsersComponent } from './components/users/users/users.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { LitsComponent } from './components/lits/lits/lits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminTemplateComponent,
    MenuComponent,
    SignupComponent,
    WelcomeComponent,
    LitsComponent,
    ServicesComponent,
    NewLitComponent,
    EditLitComponent,
    SallesComponent,
    NewSalleComponent,
    EditSalleComponent,
    NewServiceComponent,
    EditServiceComponent,
    ForgetpwdComponent,
    ContactsComponent,
    UsersComponent,
    NewUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
