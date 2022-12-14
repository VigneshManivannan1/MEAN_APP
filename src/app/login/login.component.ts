import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {employeeService} from '../services/employee.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = false;

  constructor(private formBuilder: FormBuilder,
    public authService:AuthService,
    public employeeService : employeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = false;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
        .subscribe(
            async data => {
              localStorage.setItem('token',data);
              await this.verifyToken(data);
            },
            error => {
                this.error = true;
                this.loading = false;
            });

  }

  verifyToken(data: string) {
    this.authService.verifyToken(data)
      .subscribe(
        data => {

          localStorage.setItem('currentUser', data['username']);
          localStorage.setItem('role', data['role']);
          this.loading = false;
          if (data['role'] == "Admin") {
            this.employeeService.isAdmin = true;
          }
          this.authService.isLoggedIn = true;
          this.router.navigate(['/home']);
        },
        error => {
          this.error = true;
          this.loading = false;
        });
  }

}
