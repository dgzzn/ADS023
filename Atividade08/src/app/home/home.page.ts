import { ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(toastCtrl: ToastController, private alertCtrl: AlertController) {
    
  }

  statusBluetooth: Boolean = false;

  ligaBluetooth(status: Boolean){
    this.statusBluetooth = status;
    this.exibeToast();

    if (this.statusBluetooth = false){
      this.exibeAlert();
    }

  }

  async exibeToast(){
    const msg = 'Bluetooth ligado!';
    const toast = await ToastController.create({
      message: msg,
      duration: 2000
    })
    toast.present()
  }

 async exibeAlert(){
  const alert = await this.alertCtrl.create({
    header: 'Confirmação',
    message: 'Deseja ligar o Bluetooth do aparelho?',
    buttons: [{
        text: 'Cancel',
        handler: () => { this.ligaBluetooth(false) }
      }, {
        text: 'Okay',
        handler: () => { this.statusBluetooth = false }
      }]
    });
    alert.present()
  }
}
