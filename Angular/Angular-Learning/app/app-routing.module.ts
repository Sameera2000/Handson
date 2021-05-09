import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveFormComponent } from './edit-emp-reactive-form/edit-emp-reactive-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'view', component: ViewEmpComponent },
  { path: 'edit', component: EditEmpComponent },
  { path: 'quantity', component: QuantityIncrementComponent },
  {path: 'editTemplateDriven',component: EditEmpTemplateDrivenComponent,},
  {path: 'editReactive',component: EditEmpReactiveFormComponent,},
  {path: 'list',component:EmployeeListComponent},
  {path:'info',component:EmployeeInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editempformbuilder', component: EditEmpFormBuilderComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
