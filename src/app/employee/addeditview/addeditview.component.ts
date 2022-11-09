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
  ) {}

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
              if(element['id']==this.id){
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
      // if (this.form.invalid) {
      //     return;
      // }

      this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
      this.employeeService.create(this.form.value)
          .subscribe(res => {
              this.router.navigate(['../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

  private updateUser() {
      this.employeeService.update(this.form.value)
          .subscribe(() => {
              this.router.navigate(['../../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

}

