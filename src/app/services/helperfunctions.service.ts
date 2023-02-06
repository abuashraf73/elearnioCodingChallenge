import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HelperfunctionsService {

  constructor() { }

  showErrorToUser(message:any){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }

  showSuccessToUser(message:any){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
