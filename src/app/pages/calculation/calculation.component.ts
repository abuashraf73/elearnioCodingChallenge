import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  user_input: any;
  result:number = 0;

  constructor(private authenticationServ: AuthenticationService, private route: Router,) {
    // if(!this.authenticationServ.userAuthenticated()){
    //   this.route.navigateByUrl('/login')
    // }
  }

  ngOnInit(): void {
  }

  getResult(){
    // console.log(this.user_input)
    // console.log([...this.user_input])
    this.calculate()
    // show an alert
    // this.loadingAlert();
  }

  loadingAlert(){
    let timerInterval:any;
    Swal.fire({
      title: 'Calculating your input',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
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
    let temp_array: any[] = [];
    // this.user_input = this.user_input.trim();
    // console.log("🚀 ~ file: calculation.component.ts:62 ~ CalculationComponent ~ calculate ~ this.user_input", this.user_input)
    this.user_input = [...this.user_input];
    console.log("🚀 ~ file: calculation.component.ts:64 ~ CalculationComponent ~ calculate ~ this.user_input", this.user_input)
    for(let i=0;i<this.user_input.length;i++){
      if(this.user_input[i]=='.'){
        this.user_input[i--] == this.user_input[i--]+'.'+this.user_input[i++]
      }
      if(this.user_input[i]!=''){
        temp_array.push(this.user_input[i])
      }
    }
    console.log(temp_array)
  }
}
