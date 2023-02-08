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

  user_input: any;
  result:number = 0;

  constructor(private authenticationServ: AuthenticationService, private route: Router,private helperFuncServ: HelperfunctionsService) {
    if(!this.authenticationServ.userAuthenticated()){
      this.route.navigateByUrl('/login')
    }
  }

  ngOnInit(): void {
  }

  getResult(){
    this.calculate()
    // show an alert
    this.loadingAlert();
  }

  loadingAlert(){
    let timerInterval:any;
    Swal.fire({
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

  calculate(){
      let mathematical_operators : any = {
        '+': (x: number, y: number) => x + y,
        '-': (x: number, y: number) => x - y,
        '*': (x: number, y: number) => x * y,
        '/': (x: number, y:number) => y / x
      }
      const expr_part = this.user_input.split(' ');
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
  }

  logoutUser(){
    this.authenticationServ.logoutUser();
    this.route.navigateByUrl('/login')
  }
}
