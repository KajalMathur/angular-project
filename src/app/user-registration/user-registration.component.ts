import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  signUpForm: FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      password: [null, Validators.required],
      address: this.formBuilder.group({
        houseNumber: [null],
        streetNo: [null],
        streetName: [null],
        city: [null],
        state: [null],
        country: [null],
        pincode: [null]
      }),
    });
  }

  saveUser() {
    if (!this.signUpForm.valid)
      return;
    this.userService.createUser(this.signUpForm.value.firstName, this.signUpForm.value.lastName
      , this.signUpForm.value.userName, this.signUpForm.value.password, this.signUpForm.value.address)
      .subscribe((data) => {
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log("error = " + error.status);
      });
  }
}
