import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HelperfunctionsService {

  constructor() { }

  /**
   * @description Function to display error notifcation
   * @param message Message that is displayed to the user about an error or issue
   * @author Abu Ashraf
   */
  showErrorToUser(message:string){
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }
  /**
   * @description Function to display success notification
   * @param message Message that is displayed to the user about a successful task completion
   * @author Abu Ashraf
   */
  showSuccessToUser(message:string){
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
