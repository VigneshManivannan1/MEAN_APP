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

  constructor(private employeeService: employeeService) {}

  ngOnInit() {
      this.employeeService.getAll()
          .pipe(first())
          .subscribe(employees => this.employee = employees);
  }

  deleteemployee(id: string) {
      const user = this.employee.find(x => x.id === id);
      if (!user) return;
      user.isDeleting = true;
      this.employeeService.delete(id)
          .pipe(first())
          .subscribe(() => this.employee = this.employee.filter(x => x.id !== id));
  }

}
