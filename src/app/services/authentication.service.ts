import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /**
   * @description Variable to keep track of user's session
   * @author Abu AShraf
   */
  user_logged_in: boolean = false;

  constructor() { }

  /**
   * @description Function to login user to the page when authentication is successful
   * @param given_username username typed in by the user
   * @param given_password password typed in by the user
   * @returns boolean(true is credentials are correct and false if not)
   * @author Abu Ashraf
   */
  loginUser(given_username: string, given_password: string){
    if(given_username!='' && given_password!=''){
      const user = "testuser123";
      const password = "123456";
      if(given_username===user && given_password===password){
        this.user_logged_in = true;
        return true;
      }else{
        this.user_logged_in = false;
        return false;
      }
    }else{
      return false;
    }
  }

  /**
   * @description Function to check if the user is logged in or not
   * @returns boolean(true if logged in and false if not logged in)
   * @author Abu Ashraf
   */
  userAuthenticated(){
    if(this.user_logged_in==true){
      return true;
    }else{
      return false;
    }
  }
  /**
   * @description Function to log out user from the application
   * @author Abu Ashraf
   */
  logoutUser(){
    this.user_logged_in = !this.user_logged_in;
  }
}
