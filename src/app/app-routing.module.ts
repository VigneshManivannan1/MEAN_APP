import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const EmployeeModule = () => import('./employee/employee.module').then(x => x.EmployeeModule);


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee', loadChildren: EmployeeModule },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
