import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user_logged_in: boolean = false;

  constructor() { }

  loginUser(given_username: string, given_password: string){
    // call to database to match the user credentials
    const user = "testuser123";
    const password = "123456";
    if(given_username===user && given_password===password){
      this.user_logged_in = true;
      return true;
    }else{
       this.user_logged_in = false;
       return false;
    }
  }

  registerUser(){

  }

  resetPassword(){

  }

  userAuthenticated(){
    if(this.user_logged_in==true){
      return true;
    }else{
      return false;
    }
  }

  logoutUser(){
    this.user_logged_in = false;
  }
}
