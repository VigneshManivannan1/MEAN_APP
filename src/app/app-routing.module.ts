import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const EmployeeModule = () => import('./employee/employee.module').then(x => x.EmployeeModule);


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'employee', loadChildren: EmployeeModule },
    // otherwise redirect to home
    {path:'home' , component:HomeComponent},
    {path:'register' , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
