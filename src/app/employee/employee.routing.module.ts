import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutviewComponent } from './layoutview/layoutview.component';
import { ListviewComponent } from './listview/listview.component'
import { AddeditviewComponent } from './addeditview/addeditview.component';

const routes: Routes = [
    {
        path: '', component: LayoutviewComponent,
        children: [
            { path: '', component: ListviewComponent },
            { path: 'add', component: AddeditviewComponent },
            { path: 'edit/:id', component: AddeditviewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }