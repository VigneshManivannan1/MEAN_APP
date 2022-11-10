import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN_APP';
  currentUser = '';
  isLoggedIn = false;
  constructor(public authService:AuthService){

  }

  ngOnit(){
    this.isLoggedIn = this.authService.isLoggedIn;
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
