import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { employeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addeditview',
  templateUrl: './addeditview.component.html',
  styleUrls: ['./addeditview.component.css']
})
export class AddeditviewComponent implements OnInit {

  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: employeeService,
  ) { }

  ngOnInit() {
    //check id is present in route params
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    const formOptions: AbstractControlOptions = { validators: null };
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    }, formOptions);

    if (!this.isAddMode) {
      this.employeeService.listRecords.forEach((element: any) => {
        if (element['id'] == this.id) {
          this.form = this.formBuilder.group({
            id: element.id,
            fullName: element.fullName,
            email: element.email,
            role: element.role,
          }, formOptions);
        }
      });
    }
  }

  // get attribute for form controls
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // form validation check
    if (this.form.invalid) {
        return;
    }
    if (this.isAddMode) {
    this.employeeService.listRecords.forEach((element: any) => {
      if (element['id'] == this.form.value["id"]) {
        alert("Employee ID " + element['id'] +  " is already present in the database. Please enter unique Employee ID")
        this.submitted = false;
      }
    });
  }
    if (!this.submitted)
      return;
    this.loading = true;
    if (this.isAddMode) {
      this.createEmployee();
    } else {
      this.updateEmployee();
    }
  }

  private createEmployee() {
    this.employeeService.create(this.form.value)
      .subscribe(res => {
        alert("Employee created successfully");
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => this.loading = false);
  }

  private updateEmployee() {
    this.employeeService.update(this.form.value)
      .subscribe(() => {
        alert("Employee record updated successfully");
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => this.loading = false);
  }
}

