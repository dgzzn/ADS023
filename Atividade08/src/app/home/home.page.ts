import { ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(toastCtrl: ToastController) {}

  statusBluetooth: Boolean = false;

  ligaBluetooth(status: Boolean){
    this.statusBluetooth = status;
    exibaToast();
  }

  async exibaToast(){
    const msg = 'Bluetooth ligado!';
    // Como eu faço essa merda aqui 2-j
  }
}
