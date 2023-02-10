import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { HelperfunctionsService } from 'src/app/services/helperfunctions.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {
  /**
  * @description Variable to store user's given expression
  * @author Abu Ashraf
  */
  user_input: any;
  /**
  * @description Variable to hold the result from the user's expression
  * @author Abu Ashraf
  */
  result:number = 0;

  constructor(private authenticationServ: AuthenticationService, private route: Router,private helperFuncServ: HelperfunctionsService) {
  }

  ngOnInit(){
    if(!this.authenticationServ.userAuthenticated()){
      this.route.navigateByUrl('/login')
    }
  }
/**
 * @description Function to calculate the user's expression and provide an alert while calculating
 * @author Abu Ashraf
 */
  getResult(){
    if(this.user_input!=''){
      this.calculate(this.user_input)
      // show an alert
      this.loadingAlert();
    }
  }
  /**
   * @description Function to load a 1 second timer with a popup
   * @author Abu Ashraf
   */
  loadingAlert(){
    let timerInterval:any;
    return Swal.fire({
      title: 'Calculating your input',
      html: 'I will close in <b></b> milliseconds.',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        let b:any = Swal.getHtmlContainer();
        b.querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log('I was closed by the timer')
      }
    })
  }
  /**
  * @description Function to calculate the expression from the user input
  * @returns result (number) provides the reuslt of the expression
  * @author Abu Ashraf
  */
  calculate(user_string:any){
    let mathematical_operators : any = {
        '+': (x: number, y: number) => x + y,
        '-': (x: number, y: number) => x - y,
        '*': (x: number, y: number) => x * y,
        '/': (x: number, y:number) => y / x
    }
    const expr_part = user_string.split(' ');
    let data: any = []
    if(expr_part.length>0){
        expr_part.forEach((expr_part:any) => {
          const operator = mathematical_operators[expr_part];
          if (typeof operator === 'function')
          {
            const x = data.pop()
            const y = data.pop()
            const result = operator(x, y)
            data.push(result)
          }
          else
          {
            data.push(parseFloat(expr_part))
          }
        });
        this.result = Number(data.pop().toFixed(2));
        if(this.result===0 || Number.isNaN(this.result)){
          this.helperFuncServ.showErrorToUser('Sorry you expression is not valid.')
        }
    }
    return this.result;
  }
  /**
  * @description Function to logout user from the page and navigate back to login page
  * @author Abu Ashraf
  */
  logoutUser(){
    this.authenticationServ.logoutUser();
    this.route.navigateByUrl('/login')
  }
}
