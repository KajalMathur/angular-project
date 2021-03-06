import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  error_status: boolean;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid)
      return;
    this.authService.authenticateUser(this.loginForm.value.userName, this.loginForm.value.password)
      .then((data) => {
        this.router.navigate(['/dashboard'])
      }, error => {
        console.error("error = " + error.status);
        this.error_status = true;
      });
  }

  public userRegistration() {
    this.router.navigate(['/user-registration']);
  }
}
