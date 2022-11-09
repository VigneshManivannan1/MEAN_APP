import { Component, OnInit } from '@angular/core';
import { employeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee/model/employee';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  employee!: Employee[];

  constructor(public employeeService: employeeService) {}

  ngOnInit() {
      this.employeeService.getAll()
          .subscribe(employees => 
            this.employeeService.listRecords = employees)}

  deleteemployee(id: string) {
    this.employee = this.employeeService.listRecords;
      if (!id) return;
      this.employeeService.delete(id)
          .subscribe((response) => {
          if(response){
            this.ngOnInit();
          }});
  }

}
