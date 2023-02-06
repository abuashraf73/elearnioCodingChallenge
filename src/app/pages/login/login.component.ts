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

  username: any;
  password: any; 

  constructor(private route: Router, private authenticationServ: AuthenticationService, private helperfuncServ: HelperfunctionsService) { }

  ngOnInit(): void {
  }

  validateUsername(){
    // when username is empty
    if(this.username.length==0){
      return false;
    }else{
      // remove unnecessary spaces in the name
       let user = this.username.trim();
      //  check if the length of the username is bigger than 3 letters
       if(user.length>=3){
          return true;
       }
       return false;
    }
  }

  validatePassword(){
       // when username is empty
       if(this.password.length==0){
        return false;
      }else{
        // remove unnecessary spaces in the name
         let user_password = this.password.trim();
        //  check if the length of the username is bigger than 3 letters
         if(user_password.length>=3){
            return true;
         }
         return false;
      }
  }

  loginUser(){
    if(this.validateUsername() && this.validatePassword()){
      let result = this.authenticationServ.loginUser(this.username, this.password);
      if(result){
        // Show notification
        this.helperfuncServ.showSuccessToUser("Login Successful.")
        // Navigate to next page
        this.route.navigateByUrl('/calculation')
      }else{
        // Show error notification
        this.helperfuncServ.showErrorToUser("Your credentials are wrong. Please try again.")
      }
    }
  }



}
