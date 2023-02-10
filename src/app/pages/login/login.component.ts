import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HelperfunctionsService } from 'src/app/services/helperfunctions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private authenticationServ: AuthenticationService, private helperfuncServ: HelperfunctionsService) { }

  ngOnInit(): void {
  }

  /**
   * @description Function to validate the username and password, and pass in the value to the service for final validation and navigate the user
   * to the next page if valid
   * @param form_value {username: '', password: ''}
   * @returns true if the login was successful, and false if not successful
   * @author Abu Ashraf
   */
  loginUser(form_value:any){
    let status: boolean = false;
    if(form_value.username!='' && form_value.password!=''){
      let result = this.authenticationServ.loginUser(form_value.username, form_value.password);
      if(result){
        // Show notification
        this.helperfuncServ.showSuccessToUser("Login Successful.")
        // Navigate to next page
        this.route.navigateByUrl('/calculation');
        status = true;
      }else{
        // Show error notification
        this.helperfuncServ.showErrorToUser("Your credentials are wrong. Please try again.");
        status = false;
      }
    }else{
      this.helperfuncServ.showErrorToUser("Your credentials are wrong. Please try again.");
      status = false;
    }
    return status;
  }



}
