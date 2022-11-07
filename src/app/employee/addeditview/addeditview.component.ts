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
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;
      
      const formOptions: AbstractControlOptions = { validators: null };
      this.form = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          role: ['', Validators.required],
      }, formOptions);

      if (!this.isAddMode) {
          this.employeeService.getById(this.id)
              .pipe(first())
              .subscribe(x => this.form.patchValue(x));
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      console.log(this.form);
      if (this.form.invalid) {
        console.log("form invlaid" , this.form)
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
        console.log("create")
          this.createUser();
      } else {
        console.log("update")
          this.updateUser();
      }
  }

  private createUser() {
      this.employeeService.create(this.form.value)
          .pipe(first())
          .subscribe(() => {
              this.router.navigate(['../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

  private updateUser() {
      this.employeeService.update(this.id, this.form.value)
          .pipe(first())
          .subscribe(() => {
              this.router.navigate(['../../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

}
function MustMatch(arg0: string, arg1: string): import("@angular/forms").ValidatorFn | import("@angular/forms").ValidatorFn[] | null | undefined {
  throw new Error('Function not implemented.');
}

